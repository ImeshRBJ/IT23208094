import { test, expect } from '@playwright/test';

test.describe('Swift Translator Tests - Run Sequentially', () => {
  // This will run tests in order, even if one fails
  test.describe.configure({ mode: 'serial' });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  test('Pos_Fun_0001 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama paadam karanda yanavaa.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    await page.waitForTimeout(3000);
    expect(output).toContain('මම පාඩම් කරන්ඩ යනවා.');
  });

  test('Pos_Fun_0002 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama boodimata yanavaa, haebayi vahina nisaa dhaemma yanne naee thava tikakin yanne.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    await page.waitForTimeout(3000);
    expect(output).toContain('මම බෝඩිමට යනවා, හැබයි වහින නිසා දැම්ම යන්නෙ නෑ තව ටිකකින් යන්නෙ.');
  });

  test('Pos_Fun_0003 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'ee unaata api meeka karanda epaeyi.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    await page.waitForTimeout(3000);
    expect(output).toContain('ඒ උනාට අපි මේක කරන්ඩ එපැයි.');
  });

  test('Pos_Fun_0004 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'api vaedata yanna epaeyi, namuth mama vaedata yanne naethuva gedhara inda hadhanne,oyaa mokadha karanne? oyaata mata udhavvak karanda puluvandha?');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    await page.waitForTimeout(3000);
    expect(output).toContain('අපි වැඩට යන්න එපැයි, නමුත් මම වැඩට යන්නෙ නැතුව ගෙදර ඉන්ඩ හදන්නෙ,ඔයා මොකද කරන්නේ? ඔයාට මට උදව්වක් කරන්ඩ පුලුවන්ද?');
  });

  test('Pos_Fun_0005 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'oyaata vishvaashadha meeka vaeda karanavaa kiyalaa?');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    await page.waitForTimeout(3000);
    expect(output).toContain('ඔයාට විශ්වාශද මේක වැඩ කරනවා කියලා?');
  });

  test('Pos_Fun_0006 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'karuNaakara oyaa meheta enda.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    await page.waitForTimeout(3000);
    expect(output).toContain('කරුණාකර ඔයා මෙහෙට එන්ඩ.');
  });

  test('Pos_Fun_0007 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'aayubovan!');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    await page.waitForTimeout(3000);
    expect(output).toContain('ආයුබොවන්!');
  });

  test('Pos_Fun_0008 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama ehema karanne nahae.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    await page.waitForTimeout(3000);
    expect(output).toContain('මම එහෙම කරන්නේ නහැ.');
  });

  test('Pos_Fun_0009 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama gedhara yanavaa.\nOyath enavadha?\nnaeththan mama thaniyama yanavaa.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    await page.waitForTimeout(3000);
    expect(output).toContain('මම ගෙදර යනවා.\nඔයත් එනවද?\nනැත්තන් මම තනියම යනවා.');
  });

  test('Pos_Fun_0010 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama ehema karanne nahae.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මම එහෙම කරන්නේ නහැ.');
  });

  test('Pos_Fun_0011 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'karuNaakaralaa mata podi udhavvak karanda puluvandha?');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('කරුණාකරලා මට පොඩි උදව්වක් කරන්ඩ පුලුවන්ද?');
  });

  test('Pos_Fun_0012 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'ubata puluvan nam ehema karapan.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('උබට පුලුවන් නම් එහෙම කරපන්.');
  });

  test('Pos_Fun_0013 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mee yana vidhiyata mata baya hithenavaa.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මේ යන විදියට මට බය හිතෙනවා.');
  });

  test('Pos_Fun_0014 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama iiyee vaedata giyaa.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මම ඊයේ වැඩට ගියා.');
  });

  test('Pos_Fun_0015 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama iilaga sathiyee gedhara yanavaa.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මම ඊලග සතියේ ගෙදර යනවා.');
  });

  test('Pos_Fun_0016 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'me sathiyee vaeda naethi nisaa mama gedhara yanavaa mata oyaa kiyana eka karanda baehae.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මෙ සතියේ වැඩ නැති නිසා මම ගෙදර යනවා මට ඔයා කියන එක කරන්ඩ බැහැ.');
  });

  test('Pos_Fun_0017 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama gamee yanda hadhannee.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මම ගමේ යන්ඩ හදන්නේ.');
  });

  test('Pos_Fun_0018 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'api kattiya ekathu velaa paadam vaeda tika karamu.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('අපි කට්ටිය එකතු වෙලා පාඩම් වැඩ ටික කරමු.');
  });

  test('Pos_Fun_0019 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mata adha campus enda venne naee mata adha online zoom class ekak thiyanavaa mama adha eekata innavaa oyaa kaemathinam yanna.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මට අද campus එන්ඩ වෙන්නෙ නෑ මට අද online zoom class එකක් තියනවා මම අද ඒකට ඉන්නවා ඔයා කැමතිනම් යන්න.');
  });

  test('Pos_Fun_0020 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama adha siiyath ekka colombo yanda hadhanne.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මම අද සීයත් එක්ක colombo යන්ඩ හදන්නෙ.');
  });

  test('Pos_Fun_0021 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'oyaata dhaen kohomadha?');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('ඔයාට දැන් කොහොමද?');
  });

  test('Pos_Fun_0022 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'meeke gahalaa thiyana Rs.5000 mila haridha?');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මේකෙ ගහලා තියන Rs.5000 මිල හරිද?');
  });

  test('Pos_Fun_0023 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mata 1/12/2026 dhinayata mee liyuma ganda puluvandha.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මට 1/12/2026 දිනයට මේ ලියුම ගන්ඩ පුලුවන්ද.');
  });

  test('Pos_Fun_0024 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'oyaalaa enavanam kiyanda mata 2.00PM vedhdhi ethanata enda puluvan.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('ඔයාලා එනවනම් කියන්ඩ මට 2.00PM වෙද්දි එතනට එන්ඩ පුලුවන්.');
  });
  

  test('Neg_Fun_0001 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mamavaedatika karanda patangaththaa.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මම වැඩ ටික කරන්ඩ පටන්ගත්තා.');
  });

  test('Neg_Fun_0002 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mam#a mag##ee vaed$a tika kalaa.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මම මගේ වැඩ ටික කලා.');
  });

  test('Neg_Fun_0003 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mamaoyaa takiyanda hitiyee.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මම ඔයාට කියන්ඩ හිටියේ.');
  });

  test('Neg_Fun_0004 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mata daganda puluvandha oyaa kohedha inne kiyalaa?');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මට දැනගන්ඩ පුලුවන්ද ඔයා කොහෙද ඉන්නේ කියලා?');
  });

  test('Neg_Fun_0005 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'kohomadha api yanne, oyaa kohomadha.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('කොහොමද අපි ඔයා කොහොමද.(incorrect no grammer)');
  });

  test('Neg_Fun_0006 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'ma123ma oyaata kiyanda hitiyee mee gaena.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('ම123ම ඔයාට කියන්ඩ හිටියේ මේ ගැන.(incorrect)');
  });

  test('Neg_Fun_0007 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama giyaa gedhara paadam karanda vaeda tika.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මම ගියා ගෙදර පාඩම් කරන්ඩ වැඩ ටික.(incorrect tence marker)');
  });

  test('Neg_Fun_0008 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'thx machan supiri mama ee tika genallaa dhennam.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('thx මචන් සුපිරි මම ඒ ටික ගෙනල්ලා දෙන්නම්.');
  });

  test('Neg_Fun_0009 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'oYalaa methaNa mOKADha kaRAnne.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('ඔයලා මෙතන මොකද කරන්නේ.');
  });

  test('Neg_Fun_0010 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'oya game eka mata gdhrt genath dhenda puluvandha.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('ඔය game එක මට ගෙදරට ගෙනත් දෙන්ඩ පුලුවන්ද.');
  });

  test('Pos_UI_0001 - clear button reset input and output.', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');

  const inputText = 'oyata me vidiya karanda puluwanda?';
  await page.fill('textarea', inputText);

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).not.toHaveText('');

   await page.click('text=/clear/i');

  await expect(page.locator('textarea')).toHaveValue('');

  await expect(outputLocator).toHaveText('');

  await page.waitForTimeout(3000);
});

});