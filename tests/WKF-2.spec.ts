import { test, expect } from '@playwright/test';

test.setTimeout(60000);

let id = "nchanti478@gmail.com"
let mdp = "Blablabla40@"
let name = "WKF2 test"

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
  await page.getByText('Demande d’examen au cas par cas pour un plan programme-cas par cas de droit').click();
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
  await page.getByRole('textbox', { name: 'Numéro SIRET *' }).click();
  await page.getByRole('textbox', { name: 'Numéro SIRET *' }).fill('35600000000048');
  await page.getByRole('textbox', { name: 'Courriel : exemple@mail.fr' }).first().click();
  await page.getByRole('textbox', { name: 'Courriel : exemple@mail.fr' }).first().fill('a@a.com');
  await page.getByRole('textbox', { name: 'Téléphone : +XX X XX XX XX XX , numeric only,', exact: true }).click();
  await page.getByRole('textbox', { name: 'Téléphone : +XX X XX XX XX XX , numeric only,', exact: true }).pressSequentially('666666666');
  await page.getByRole('textbox', { name: 'Nom' }).nth(2).click();
  await page.getByRole('textbox', { name: 'Nom' }).nth(2).fill('a');
  await page.getByRole('textbox', { name: 'Prénom' }).first().click();
  await page.getByRole('textbox', { name: 'Prénom' }).first().fill('a');
  await page.getByRole('textbox', { name: 'Qualité' }).first().click();
  await page.getByRole('textbox', { name: 'Qualité' }).first().fill('a');
  await page.getByRole('textbox', { name: 'Nom' }).nth(4).click();
  await page.getByRole('textbox', { name: 'Nom' }).nth(4).fill('a');
  await page.getByRole('textbox', { name: 'Prénom' }).last().click();
  await page.getByRole('textbox', { name: 'Prénom' }).last().fill('a');
  await page.getByText('Exp: 20 Rue Lecourbe 75015 ParisSupprimer').click();
  await page.getByRole('textbox', { name: 'Exp: 20 Rue Lecourbe 75015' }).pressSequentially('paris');
  await page.getByRole('option', { name: 'Paris', exact: true }).click();
  await page.getByRole('textbox', { name: 'Téléphone : +XX X XX XX XX XX , numeric only, *' }).click();
  await page.getByRole('textbox', { name: 'Téléphone : +XX X XX XX XX XX , numeric only, *' }).pressSequentially('666666666');
  await page.getByRole('textbox', { name: 'Courriel : exemple@mail.fr' }).last().click();
  await page.getByRole('textbox', { name: 'Courriel : exemple@mail.fr' }).last().fill('a@a.com');
  await page.getByRole('textbox', { name: 'Qualité' }).last().click();
  await page.getByRole('textbox', { name: 'Qualité' }).last().fill('a');
  await page.getByRole('textbox', { name: 'Intitulé du document *' }).click();
  await page.getByRole('textbox', { name: 'Intitulé du document *' }).fill(name);
  await page.getByText('Une élaboration ?').click();
  await page.locator('.choices > .form-control.ui').nth(1).click();
  await page.getByText('Directive de protection et de').click();
  await page.locator('.choices > .form-control.ui').last().click();
  await page.getByRole('option', { name: 'Manuelle' }).click();
  await page.getByText('Exp: ParisExp: ParisRemove').click();
  await page.getByRole('textbox', { name: 'Exp: Paris' }).pressSequentially('paris');
  await page.getByText('Paris : 75 Paris').click();
  await page.getByText('Non', { exact: true }).click();
  await page.getByRole('button', { name: 'Page suivante   ' }).click();
  //page 2
  await page.getByRole('button', { name: '1. Pièce jointe (présentation' }).setInputFiles({
  name: 'file.txt',
  mimeType: 'text/plain',
  buffer: Buffer.from('this is test')
});
});