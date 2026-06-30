import { test } from '@playwright/test';

test.setTimeout(60000);

let id: string = "nchanti478@gmail.com"
let mdp: string = "Blablabla40@"
let name: string = "WKF3.4 test"
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
  await page.getByText('Cas par cas ad’hoc pour une UTN').click();
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
  await page.getByRole('textbox', { name: 'Prénom *' }).nth(0).click();
  await page.getByRole('textbox', { name: 'Prénom *' }).nth(0).fill('a');
  await page.getByRole('textbox', { name: 'Nom *', exact: true }).nth(0).click();
  await page.getByRole('textbox', { name: 'Nom *', exact: true }).nth(0).fill('a');
  await page.getByRole('textbox', { name: 'Qualité *' }).nth(0).click();
  await page.getByRole('textbox', { name: 'Qualité *' }).nth(0).fill('a');
  await page.getByRole('textbox', { name: 'Prénom *' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Prénom *' }).nth(1).fill('a');
  await page.getByRole('textbox', { name: 'Nom *', exact: true }).nth(1).click();
  await page.getByRole('textbox', { name: 'Nom *', exact: true }).nth(1).fill('a');
  await page.getByRole('textbox', { name: 'Qualité *' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Qualité *' }).nth(1).fill('a');
  await page.getByRole('textbox', { name: 'Téléphone : +XX X XX XX XX XX' }).click();
  await page.getByRole('textbox', { name: 'Téléphone : +XX X XX XX XX XX' }).pressSequentially('666666666');
  await page.getByRole('textbox', { name: 'Courriel : exemple@mail.fr *' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Courriel : exemple@mail.fr *' }).nth(1).fill('a@a.com');
  await page.getByText('Exp: 20 Rue Lecourbe 75015 ParisSupprimer').click();
  await page.getByRole('textbox', { name: 'Exp: 20 Rue Lecourbe 75015' }).pressSequentially('paris');
  await page.getByRole('option', { name: 'Paris', exact: true }).click();
  await page.locator('.choices > .form-control.ui').nth(1).click();
  await page.getByRole('option', { name: 'Structurante' }).click();
  await page.getByRole('textbox', { name: 'Intitulé de l\'UTN *' }).click();
  await page.getByRole('textbox', { name: 'Intitulé de l\'UTN *' }).fill(name);
  await page.locator('.input-group>.form-control').nth(1).click();
  await page.locator('.input-group>.form-control').nth(1).fill(date);
  await page.locator('.choices > .form-control.ui').nth(2).click();
  await page.getByRole('option', { name: 'Manuelle' }).click();
  await page.getByText('Exp: ParisExp: ParisRemove').click();
  await page.getByRole('textbox', { name: 'Exp: Paris' }).pressSequentially('paris');
  await page.getByText('Paris : 75 Paris').click();
  await page.getByRole('textbox', { name: '2.5' }).first().click();
  await page.getByRole('textbox', { name: '2.5' }).first().fill('a');
  await page.getByLabel('3.1.1.').getByText('Non').click();
  await page.getByLabel('3.1.2').getByText('Non').click();
  await page.getByLabel('3.1.3').getByText('Non').click();
  await page.getByLabel('3.1.4').getByText('Non').click();
  await page.getByLabel('3.1.5').getByText('Non').click();
  await page.getByLabel('3.2.1.').getByText('Non', { exact: true }).click();
  await page.locator('.choices > .form-control.ui').nth(4).click();
  await page.getByText('R122-8/2- Les liaisons entre domaines skiables alpins existants').click();
  await page.getByRole('textbox', { name: '4.2.0.' }).click();
  await page.getByRole('textbox', { name: '4.2.0.' }).fill('a');
  await page.getByLabel('4.2.1.1.').getByText('Non').click();
  await page.getByRole('textbox', { name: '4.2.2.' }).click();
  await page.getByRole('textbox', { name: '4.2.2.' }).fill('a');
  await page.getByRole('textbox', { name: '4.2.3.' }).click();
  await page.getByRole('textbox', { name: '4.2.3.' }).fill('a');
  await page.getByRole('textbox', { name: '4.2.4.' }).click();
  await page.getByRole('textbox', { name: '4.2.4.' }).fill('a');
  await page.getByRole('textbox', { name: '4.2.5.' }).click();
  await page.getByRole('textbox', { name: '4.2.5.' }).fill('a');
  await page.getByRole('textbox', { name: '4.2.6.' }).click();
  await page.getByRole('textbox', { name: '4.2.6.' }).fill('a');
  await page.getByLabel('4.3.1.').getByText('Non').click();
  await page.getByLabel('5.2.2').getByText('Non').click();
  await page.getByLabel('5.2.3').getByText('Non').click();
  await page.getByLabel('5.2.4').getByText('Non').click();
  await page.getByLabel('5.2.5').getByText('Non').click();
  await page.getByLabel('5.2.6').getByText('Non').click();
  await page.getByLabel('5.2.7').getByText('Non').click();
  await page.getByLabel('5.2.8').getByText('Non').click();
  await page.getByLabel('Autre protection').getByText('Non').first().click();
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
  await page.getByLabel('5.4.1.').getByText('Non').click();
  await page.locator('.input-group>.form-control').last().click();
  await page.locator('.input-group>.form-control').last().fill(date);
  await page.getByRole('textbox', { name: '7.2.' }).click();
  await page.getByRole('textbox', { name: '7.2.' }).fill('a');
  await page.getByLabel('Enquête publique ?').getByText('Non').click();
  await page.getByLabel('Participation du public par voie électronique ?').getByText('Non').click();
  await page.getByLabel('Enquête publique unique organisée avec une ou plusieurs autres procédures ?').getByText('Non').click();
  await page.getByRole('button', { name: 'Page suivante   ' }).click();
  //page 2
  await page.getByRole('button', { name: '8.1' }).first().setInputFiles({
  name: 'file.txt',
  mimeType: 'text/plain',
  buffer: Buffer.from('this is test')
});
  await page.getByRole('button', { name: '8.1' }).nth(1).setInputFiles({
  name: 'file.txt',
  mimeType: 'text/plain',
  buffer: Buffer.from('this is test')
});
  await page.getByRole('button', { name: '8.1' }).nth(2).setInputFiles({
  name: 'file.txt',
  mimeType: 'text/plain',
  buffer: Buffer.from('this is test')
});
});