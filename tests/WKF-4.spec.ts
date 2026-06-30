import { test } from '@playwright/test';

test.setTimeout(60000);

let id = "nchanti478@gmail.com"
let mdp = "Blablabla40@"
let name = "WKF4 test"

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
  await page.getByText('Demande d’avis d’une autorité environnementale pour un projet').click();
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
  await page.getByRole('textbox', { name: 'Intitulé du projet *' }).click();
  await page.getByRole('textbox', { name: 'Intitulé du projet *' }).fill(name);
  await page.getByRole('textbox', { name: 'Service effectuant la saisine *' }).click();
  await page.getByRole('textbox', { name: 'Service effectuant la saisine *' }).fill('a');
  await page.getByRole('textbox', { name: 'Numéro SIRET de la structure' }).click();
  await page.getByRole('textbox', { name: 'Numéro SIRET de la structure' }).fill('35600000000048');
  await page.getByRole('textbox', { name: 'Courriel : exemple@mail.fr' }).first().click();
  await page.getByRole('textbox', { name: 'Courriel : exemple@mail.fr' }).first().fill('a@a.com');
  await page.getByRole('textbox', { name: 'Nom *', exact: true }).dblclick();
  await page.getByRole('textbox', { name: 'Nom *', exact: true }).fill('a');
  await page.getByRole('textbox', { name: 'Prénom *' }).click();
  await page.getByRole('textbox', { name: 'Prénom *' }).fill('a');
  await page.getByRole('textbox', { name: 'Qualité *' }).click();
  await page.getByRole('textbox', { name: 'Qualité *' }).fill('a');
  await page.getByRole('textbox', { name: 'Tél. : +XX X XX XX XX XX *' }).click();
  await page.getByRole('textbox', { name: 'Tél. : +XX X XX XX XX XX *' }).pressSequentially('666666666');
  await page.getByRole('textbox', { name: 'Fax' }).click();
  await page.getByRole('textbox', { name: 'Fax' }).pressSequentially('666666666');
  await page.getByRole('textbox', { name: 'Courriel : exemple@mail.fr' }).last().click();
  await page.getByRole('textbox', { name: 'Courriel : exemple@mail.fr' }).last().fill('a@a.com');
  await page.locator('.choices > .form-control.ui').first().click();
  await page.getByRole('option', { name: 'Autorisation environnementale' }).click();
  await page.getByText('Nouveau projet activité').click();
  await page.getByLabel('2.2 Ce projet a-t-il fait l’').getByText('Non').click();
  await page.getByLabel('S\'agit-il d\'une procédure commune?').getByText('Non').click();
  await page.getByText('Exp: 20 Rue Lecourbe 75015 ParisSupprimer').click();
  await page.getByRole('textbox', { name: 'Exp: 20 Rue Lecourbe 75015' }).pressSequentially('paris');
  await page.getByText('Paris', { exact: true }).click();
  await page.locator('.choices > .form-control.ui').last().click();
  await page.getByText('1.Installations classées pour').click();
  await page.getByText('a) Installations mentionnées').click();
  await page.getByText('Personne morale', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Numéro SIRET *' }).click();
  await page.getByRole('textbox', { name: 'Numéro SIRET *' }).fill('35600000000048');
  await page.getByRole('button', { name: 'Page suivante   ' }).click();
  //page 2
  await page.getByRole('button', { name: '1.Etude d\'impact *' }).setInputFiles({
  name: 'file.txt',
  mimeType: 'text/plain',
  buffer: Buffer.from('this is test')
  });
  await page.getByRole('button', { name: '2.Dossier administratif et' }).setInputFiles({
  name: 'file.txt',
  mimeType: 'text/plain',
  buffer: Buffer.from('this is test')
  });
});