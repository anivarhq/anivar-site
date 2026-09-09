// The exact function from the page, tested against what real browsers report.
function currentOS(nav) {
  var ua = nav.userAgent || '';
  // There is no mobile build. Without this an iPad reports "mac" and an Android
  // phone reports "linux", and the page would hand a phone a desktop installer
  // and call it their system.
  if ((nav.userAgentData && nav.userAgentData.mobile) ||
      /android|iphone|ipad|ipod/i.test(ua)) return null;
  var p = (nav.userAgentData && nav.userAgentData.platform) ||
          nav.platform || ua || '';
  if (/win/i.test(p))            return 'win';
  if (/mac/i.test(p))            return 'mac';
  if (/linux|x11|cros/i.test(p)) return 'linux';
  return null;
}
const cases = [
  ['Chrome on Windows 11',  { userAgentData: { platform: 'Windows' } }, 'win'],
  ['Firefox on Windows',    { platform: 'Win32' },                      'win'],
  ['Chrome on macOS',       { userAgentData: { platform: 'macOS' } },   'mac'],
  ['Safari on macOS',       { platform: 'MacIntel' },                   'mac'],
  ['Safari on iPad',        { platform: 'iPad', userAgent: 'Mozilla/5.0 (iPad; CPU OS 17_0)' }, null],
  ['Chrome on Linux',       { userAgentData: { platform: 'Linux' } },   'linux'],
  ['Firefox on Linux',      { platform: 'Linux x86_64' },               'linux'],
  ['ChromeOS',              { platform: 'CrOS x86_64 14541' },          'linux'],
  ['Android phone',         { platform: 'Linux armv8l', userAgent: 'Mozilla/5.0 (Linux; Android 14)' }, null],
  ['Android, UA-CH mobile', { userAgentData: { platform: 'Android', mobile: true } }, null],
  ['locked-down browser',   {},                                         null],
];
let bad = 0;
for (const [name, nav, want] of cases) {
  const got = currentOS(nav);
  const ok = got === want;
  if (!ok) bad++;
  console.log(`  ${ok ? 'ok  ' : 'FAIL'}  ${name.padEnd(28)} -> ${String(got).padEnd(6)} (want ${want})`);
}
console.log(bad ? `\n  ${bad} FAILED` : '\n  all pass — detection is per-visitor, not pinned to you');
