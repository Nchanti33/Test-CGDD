import { test } from '@playwright/test';

test.setTimeout(60000);

let id: string = "nchanti478@gmail.com"
let mdp: string = "Blablabla40@"
let name: string = "WKF3.2 test"
let date: string = new Date().toISOString().split('T')[0].split('-').reverse().join('-');

test(name, async ({ page }) => {
  await page.goto('https://portail-petitionnaire-cgdd.i-psfr.com/#/auth/lautorite-environnementale');
  //login
  await page.getByRole('button', { name: 'Accéder à mon espace' }).click();
  await page.getByRole('textbox', { name: 'Identifiant Format attendu:' }).click();
  await page.getByRole('textbox', { name: 'Identifiant Format attendu:' }).fill(id);
  await page.getByRole('textbox', { name: 'Mot de passe' }).click();
  await page.getByRole('textbox', { name: 'Mot de passe' }).fill(mdp);
  await page.getByText('Se souvenir de moi').click();
  await page.getByRole('button', { name: 'Se connecter' }).click();
  //mon espace
  await page.getByRole('link', { name: 'Accéder à mon espace' }).click();
  await page.getByRole('link', { name: 'FAIRE UNE DEMANDE' }).dblclick();
  //demande
  await page.getByText('Personne morale *').click();
  await page.getByRole('button', { name: 'Suivant' }).click();
  await page.getByText('Saisine de l’autorité').click();
  await page.getByText('Cas par cas ad’hoc pour un PLU ou PLUi').click();
  await page.getByRole('button', { name: 'Suivant' }).click();
  await page.getByText('Non *').click();
  await page.getByText('Oui *').nth(1).click();
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'Auvergne-Rhône-Alpes' }).click();
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'Bourgogne-Franche-Comté' }).click();
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByLabel('Remplir le formulaire').getByRole('button', { name: 'Valider' }).click();
  //page 1
  await page.getByRole('textbox', { name: 'Intitulé de la demande *' }).click();
  await page.getByRole('textbox', { name: 'Intitulé de la demande *' }).fill(name);
  await page.getByRole('textbox', { name: 'Numéro SIRET' }).click();
  await page.getByRole('textbox', { name: 'Numéro SIRET' }).fill('35600000000048');
  await page.getByRole('textbox', { name: 'Courriel : exemple@mail.fr *' }).nth(0).click();
  await page.getByRole('textbox', { name: 'Courriel : exemple@mail.fr *' }).nth(0).fill('a@a.com');
  await page.getByRole('textbox', { name: 'Nom *', exact: true }).nth(0).click();
  await page.getByRole('textbox', { name: 'Nom *', exact: true }).nth(0).fill('a');
  await page.getByRole('textbox', { name: 'Prénom *' }).nth(0).click();
  await page.getByRole('textbox', { name: 'Prénom *' }).nth(0).fill('a');
  await page.getByRole('textbox', { name: 'Qualité *' }).nth(0).click();
  await page.getByRole('textbox', { name: 'Qualité *' }).nth(0).fill('a');
  await page.getByRole('textbox', { name: 'Nom *', exact: true }).nth(1).click();
  await page.getByRole('textbox', { name: 'Nom *', exact: true }).nth(1).fill('a');
  await page.getByRole('textbox', { name: 'Prénom *' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Prénom *' }).nth(1).fill('a');
  await page.getByText('Exp: 20 Rue Lecourbe 75015 ParisSupprimer').click();
  await page.getByRole('textbox', { name: 'Exp: 20 Rue Lecourbe 75015' }).pressSequentially('paris');
  await page.getByRole('option', { name: 'Paris', exact: true }).click();
  await page.getByRole('textbox', { name: 'Téléphone : +XX X XX XX XX XX' }).click();
  await page.getByRole('textbox', { name: 'Téléphone : +XX X XX XX XX XX' }).pressSequentially('666666666');
  await page.getByRole('textbox', { name: 'Courriel : exemple@mail.fr *' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Courriel : exemple@mail.fr *' }).nth(1).fill('a@a.com');
  await page.getByRole('textbox', { name: 'Qualité *' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Qualité *' }).nth(1).fill('a');
  await page.locator('.choices > .form-control.ui').nth(1).click();
  await page.getByRole('option', { name: 'PLU', exact: true }).click();
  await page.getByRole('textbox', { name: 'Intitulé du document *' }).click();
  await page.getByRole('textbox', { name: 'Intitulé du document *' }).fill(name);
  await page.locator('.choices > .form-control.ui').nth(2).click();
  await page.getByRole('option', { name: 'Manuelle' }).click();
  await page.getByText('Exp: ParisRemove item').click();
  await page.getByRole('textbox', { name: 'Exp: Paris' }).pressSequentially('paris');
  await page.getByText('Paris : 75 Paris').click();
  await page.getByLabel('3.1.1 Le territoire est-il').getByText('Non').click();
  await page.getByLabel('3.1.2 Le territoire est-il').getByText('Non').click();
  await page.getByLabel('3.1.3 Le territoire est-il').getByText('Non').click();
  await page.getByLabel('3.2.1 Le PLU a fait l’objet d').getByText('Non').click();
  await page.locator('.choices > .form-control.ui').nth(4).click();
  await page.getByRole('option', { name: 'Révision' }).click();
  await page.getByRole('textbox', { name: '4.2.1 Population concernée d\'' }).click();
  await page.getByRole('textbox', { name: '4.2.1 Population concernée d\'' }).fill('1');
  await page.locator('input[name="data[ZoneUPresent]"]').fill('1');
  await page.locator('input[name="data[ZoneUPresent]"]').fill('1');
  await page.locator('input[name="data[PurcentActU]"]').fill('1');
  await page.locator('input[name="data[Zone1AUPresent]"]').fill('1');
  await page.locator('input[name="data[Purcent1AUctU]"]').fill('1');
  await page.locator('input[name="data[Zone2AUPresent]"]').fill('1');
  await page.locator('input[name="data[ZoneAPresent]"]').fill('1');
  await page.locator('input[name="data[ZoneNPresent]"]').fill('1');
  await page.locator('input[name="data[Purcent2AUctU]"]').fill('1');
  await page.locator('input[name="data[PurcentActA]"]').fill('1');
  await page.locator('input[name="data[PurcentActN]"]').fill('1');
  await page.locator('input[name="data[ZoneUAfter]"]').fill('1');
  await page.locator('input[name="data[Zone1AUAfter]"]').fill('1');
  await page.locator('input[name="data[Zone2AUAfter]"]').fill('1');
  await page.locator('input[name="data[ZoneAAfter]"]').fill('1');
  await page.locator('input[name="data[ZoneNAfter]"]').fill('1');
  await page.locator('input[name="data[PersentUAfter]"]').fill('1');
  await page.locator('input[name="data[Persent1AUAfter]"]').fill('1');
  await page.locator('input[name="data[Persent2AUAfter]"]').fill('1');
  await page.locator('input[name="data[PersentAAfter]"]').fill('1');
  await page.locator('input[name="data[PersentNAfter]"]').fill('1');
  await page.getByRole('textbox', { name: '4.2.3' }).click();
  await page.getByRole('textbox', { name: '4.2.3' }).fill('a');
  await page.getByRole('textbox', { name: '4.3.1' }).click();
  await page.getByRole('textbox', { name: '4.3.1' }).fill('a');
  await page.getByLabel('4.3.2').getByText('Non').click();
  await page.getByLabel('4.3.3').getByText('Non').click();
  await page.getByLabel('4.3.4').getByText('Non').click();
  await page.getByLabel('4.3.5').getByText('Non').click();
  await page.getByLabel('4.3.6').getByText('Non').click();
  await page.getByLabel('4.3.7').getByText('Non').click();
  await page.getByLabel('4.3.8').getByText('Non').click();
  await page.getByLabel('4.3.9').getByText('Non').click();
  await page.getByLabel('4.3.10').getByText('Non').click();
  await page.getByLabel('4.7.1').getByText('Non').click();
  await page.getByLabel('5.1.1').getByText('Non').first().click();
  await page.getByLabel('5.1.2').getByText('Non').first().click();
  await page.getByLabel('5.1.3').getByText('Non').click();
  await page.getByLabel('5.1.4').getByText('Non').click();
  await page.getByLabel('5.1.5').getByText('Non').click();
  await page.getByLabel('5.1.6').getByText('Non').click();
  await page.getByLabel('5.1.7').getByText('Non').click();
  await page.getByLabel('5.1.8').getByText('Non').click();
  await page.getByLabel('5.1.9').getByText('Non').click();
  await page.getByLabel('5.1.10').getByText('Non').click();
  await page.getByLabel('5.1.11').getByText('Non').click();
  await page.getByLabel('5.1.12').getByText('Non').click();
  await page.getByLabel('5.1.13').getByText('Non').click();
  await page.getByLabel('5.1.14').getByText('Non').click();
  await page.getByLabel('5.1.15').getByText('Non').click();
  await page.getByLabel('5.1.16').getByText('Non').click();
  await page.getByLabel('5.1.17').getByText('Non').click();
  await page.locator('.form-check-input').nth(63).click();
  await page.getByLabel('5.1.19').getByText('Non').click();
  await page.getByLabel('5.1.20').getByText('Non').click();
  await page.getByLabel('5.2.1').getByText('Non').first().click();
  await page.getByLabel('5.2.2').getByText('Non').click();
  await page.getByLabel('5.2.3').getByText('Non').click();
  await page.getByLabel('5.2.4').getByText('Non').click();
  await page.getByLabel('5.2.5').getByText('Non').click();
  await page.getByLabel('5.2.6').getByText('Non').click();
  await page.getByLabel('5.2.7').getByText('Non').click();
  await page.getByLabel('5.2.8').getByText('Non').click();
  await page.getByLabel('5.3.1').getByText('Non').first().click();
  await page.getByLabel('5.3.2').getByText('Non').click();
  await page.getByLabel('5.3.3').getByText('Non').click();
  await page.getByLabel('5.3.4').getByText('Non').click();
  await page.getByLabel('5.3.5').getByText('Non').click();
  await page.getByLabel('5.3.6').getByText('Non').click();
  await page.getByLabel('5.3.7').getByText('Non').click();
  await page.getByLabel('5.3.8').getByText('Non').click();
  await page.getByLabel('5.3.9').getByText('Non').click();
  await page.getByLabel('5.3.10').getByText('Non').click();
  await page.getByLabel('5.3.11').getByText('Non').click();
  await page.getByLabel('5.3.12').getByText('Non').click();
  await page.getByLabel('5.3.13').getByText('Non').click();
  await page.getByLabel('5.3.14').getByText('Non').click();
  await page.getByLabel('5.3.15').getByText('Non').click();
  await page.getByLabel('5.4.1').getByText('Non').click();
  await page.locator('.input-group>.form-control').last().click();
  await page.locator('.input-group>.form-control').last().fill(date);
  await page.getByLabel('Enquête publique ?').getByText('Non').click();
  await page.getByLabel('Participation du public par voie électronique ?').getByText('Non').click();
  await page.getByLabel('Enquête publique unique organisée avec une ou plusieurs autres procédures ?').getByText('Non').click();
  await page.getByRole('button', { name: 'Page suivante   ' }).click();
  //page 2
  await page.getByRole('button', { name: '8.1' }).setInputFiles({
  name: 'file.txt',
  mimeType: 'text/plain',
  buffer: Buffer.from('this is test')
});
  await page.getByRole('button', { name: '8.2.1' }).setInputFiles({
  name: 'file.txt',
  mimeType: 'text/plain',
  buffer: Buffer.from('this is test')
});
  await page.getByRole('button', { name: '8.2.2' }).setInputFiles({
  name: 'file.txt',
  mimeType: 'text/plain',
  buffer: Buffer.from('this is test')
});
});