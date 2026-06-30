import { test } from '@playwright/test';

test.setTimeout(60000);

let id: string = "nchanti478@gmail.com"
let mdp: string = "Blablabla40@"
let name: string = "WKF3.3 test"
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
  await page.getByText('Cas par cas ad’hoc pour un SCoT').click();
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
  await page.getByRole('textbox', { name: 'Téléphone : +XX X XX XX XX XX' }).pressSequentially('999999999');
  await page.getByText('Exp: 20 Rue Lecourbe 75015 ParisSupprimer').click();
  await page.getByRole('textbox', { name: 'Exp: 20 Rue Lecourbe 75015' }).pressSequentially('paris');
  await page.getByRole('option', { name: 'Paris', exact: true }).click();
  await page.getByRole('textbox', { name: 'Intitulé du document *' }).click();
  await page.getByRole('textbox', { name: 'Intitulé du document *' }).fill(name);
  await page.locator('.input-group>.form-control').nth(1).click();
  await page.locator('.input-group>.form-control').nth(1).fill(date);
  await page.locator('.form-control.ui').nth(1).click();
  await page.getByRole('option', { name: 'Manuelle' }).click();
  await page.getByText('Exp: ParisRemove item').click();
  await page.getByRole('textbox', { name: 'Exp: Paris' }).pressSequentially('paris');
  await page.getByText('Paris : 75 Paris').click();
  await page.getByLabel('3.1.1.').getByText('Non').click();
  await page.getByLabel('3.1.2').getByText('Non').click();
  await page.locator('.input-group>.form-control').nth(3).click();
  await page.locator('.input-group>.form-control').nth(3).fill(date);
  await page.getByLabel('3.2.2.').getByText('Non').click();
  await page.getByRole('textbox', { name: '3.2.3' }).click();
  await page.getByRole('textbox', { name: '3.2.3' }).fill('a');
  await page.getByLabel('3.2.4').getByText('Non').click();
  await page.getByRole('button', { name: '4.' }).click();
  await page.locator('.form-control.ui').nth(3).click();
  await page.getByRole('option', { name: 'Révision' }).click();
  await page.getByRole('textbox', { name: '4.2.1.' }).click();
  await page.getByRole('textbox', { name: '4.2.1.' }).fill('1');
  await page.getByRole('textbox', { name: '4.2.2.' }).click();
  await page.getByRole('textbox', { name: '4.2.2.' }).fill('a');
  await page.getByRole('textbox', { name: '4.3.1.' }).click();
  await page.getByRole('textbox', { name: '4.3.1.' }).fill('a');
  await page.getByLabel('4.7.1.').getByText('Non').click();
  await page.getByRole('button', { name: '5.' }).click();
  await page.getByRole('button', { name: '5.1' }).click();
  await page.getByLabel('5.1.1').getByText('Non').first().click();
  await page.getByLabel('5.1.2.1').getByText('Non').click();
  await page.getByLabel('5.1.3.1').getByText('Non').click();
  await page.getByLabel('5.1.4.1').getByText('Non').click();
  await page.getByLabel('5.1.5.1').getByText('Non').click();
  await page.getByLabel('5.1.6.1').getByText('Non').click();
  await page.getByLabel('5.1.7.1').getByText('Non').click();
  await page.getByLabel('5.1.8.1').getByText('Non').click();
  await page.getByLabel('5.1.9.1').getByText('Non').click();
  await page.getByLabel('5.1.10.1').getByText('Non').click();
  await page.getByLabel('5.1.11.1').getByText('Non').click();
  await page.getByLabel('5.1.12.1').getByText('Non').click();
  await page.getByLabel('5.1.13.1').getByText('Non').click();
  await page.getByLabel('5.1.14.1').getByText('Non').click();
  await page.getByLabel('5.1.15.1').getByText('Non').click();
  await page.getByLabel('5.1.16.1').getByText('Non').click();
  await page.getByLabel('5.1.17.1').getByText('Non').click();
  await page.locator('.form-check-input').nth(45).click();
  await page.getByLabel('5.1.19.1').getByText('Non').click();
  await page.getByLabel('5.1.20.1').getByText('Non').click();
  await page.getByRole('button', { name: '5.2.' }).click();
  await page.getByLabel('Les dispositions de la loi montagne').getByText('Non').last().click();
  await page.getByLabel('Les dispositions de la loi littoral').getByText('Non').last().click();
  await page.getByLabel('Un plan de prévention des risques technologiques prévu à l’article L. 515-15 du code de l’environnement').getByText('Non').last().click();
  await page.getByLabel('Un plan de prévention des risques naturels prévisibles prévu à L. 562-1 du code de l’environnement').getByText('Non').last().click();
  await page.getByLabel('Un périmètre des servitudes relatives aux installations classées pour la protection de l\'environnement instituées en application de l’article L. 515-8 du code de l’environnement').getByText('Non').last().click();
  await page.getByLabel('Un périmètre des servitudes sur des terrains pollués, sur l\'emprise des sites de stockage de déchets, sur l\'emprise d\'anciennes carrières ou dans le voisinage d\'un site de stockage géologique de dioxyde de carbone instituées en application de l’article L. 515-12 du code de l’environnement').getByText('Non').last().click();
  await page.getByLabel('Un plan de prévention des risques miniers prévus à l’article L. 174-5 du code minier').getByText('Non').last().click();
  await page.getByLabel('Autre protection').getByText('Non').nth(1).click();
  await page.getByRole('button', { name: '5.3.' }).click();
  await page.getByLabel('Un site désigné Natura 2000 en application de l\'article L. 414-1 du code de l\'environnement (ZICO, ZPS, ZSC)').getByText('Non').last().click();
  await page.getByLabel('Un cœur de parc national délimité en application de l\'article L. 331-2 du code de l\'environnement').getByText('Non').last().click();
  await page.getByLabel('Une réserve naturelle ou un périmètre de protection autour d’une réserve institués en application, respectivement, des articles L. 332-1 et L. 332-16 du code de l’environnement').getByText('Non').last().click();
  await page.getByLabel('Un site inscrit ou classé en application des articles L. 341-1 et L. 341-2 du code de l’environnement').getByText('Non').last().click();
  await page.getByLabel('Un site patrimonial remarquable créé en application des articles L. 631-1 et L. 632-2 du code du patrimoine').getByText('Non').last().click();
  await page.getByLabel('Des abords des monuments historiques prévus aux articles L. 621-30 et L. 621-31 du code du patrimoine').getByText('Non').last().click();
  await page.getByLabel('Une zone humide prévue à l’article L. 211-1 du code de l’environnement').getByText('Non').last().click();
  await page.getByLabel('Une trame verte et bleue prévue à l’article L. 371-1 du code de l’environnement (préciser réservoir de biodiversité et/ou corridor écologique)').getByText('Non').last().click();
  await page.getByLabel('Une ZNIEFF (préciser type I ou II) prévue à l’article L. 411-1 A du code de l’environnement').getByText('Non').last().click();
  await page.getByLabel('Un espace naturel sensible prévu à l’article L. 113-8 du code de l’urbanisme').getByText('Non').last().click();
  await page.locator('.form-check-input').nth(87).click();
  await page.getByLabel('Un espace boisé classé prévu à l’article L. 113-1 du code de l’urbanisme, une forêt de protection prévue à l’article L. 141-1 du code forestier').getByText('Non').last().click();
  await page.getByLabel('D’un secteur délimité par le plan local d\'urbanisme en application de l’article L. 151-19 du code de l’urbanisme').getByText('Non').last().click();
  await page.getByLabel('D’un secteur délimité par le plan local d\'urbanisme en application de l’article L.151-23 du code de l’urbanisme').getByText('Non').last().click();
  await page.getByLabel('Autre protection').getByText('Non').last().click();
  await page.getByRole('button', { name: '5.4' }).click();
  await page.getByLabel('5.4.1').getByText('Non').click();
  await page.getByRole('button', { name: '7.' }).click();
  await page.locator('.input-group>.form-control').last().click();
  await page.locator('.input-group>.form-control').last().fill(date);
  await page.getByRole('textbox', { name: '7.2' }).click();
  await page.getByRole('textbox', { name: '7.2' }).fill('a');
  await page.getByRole('button', { name: '7.3' }).click();
  await page.getByLabel('Enquête publique ?').getByText('Non').click();
  await page.getByLabel('Participation du public par voie électronique ?').getByText('Non').click();
  await page.getByLabel('Enquête publique unique organisée avec une ou plusieurs autres procédures ?').getByText('Non').click();
  await page.locator('.form-check-label.label-position-right.focus-style > span').click();
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
  await page.getByRole('button', { name: '8.2.2' }).setInputFiles({
  name: 'file.txt',
  mimeType: 'text/plain',
  buffer: Buffer.from('this is test')
});
});