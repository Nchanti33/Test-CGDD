import { test } from '@playwright/test';

test.setTimeout(60000);

let id = "nchanti478@gmail.com"
let mdp = "Blablabla40@"
let name = "WKF1 test"

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
  await page.getByText('Demande d’examen au cas par cas préalable à la réalisation d’une étude d’impact pour un projet').click();
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
  await page.getByRole('textbox', { name: 'Intitulé du projet * saisir' }).click();
  await page.getByRole('textbox', { name: 'Intitulé du projet * saisir' }).fill(name);
  await page.getByText('Sélectionner une catégorieSé').click();
  await page.getByRole('option', { name: '1.Installations classées pour' }).click();
  await page.getByText('a) Autres installations class').click();
  await page.getByLabel('3.1 Le projet fait-il l’objet').getByText('Non').click();
  await page.getByLabel('3.2 Le projet fait-il l’objet').getByText('Non').click();
  await page.getByRole('textbox', { name: '4.1 Nature du projet, y' }).click();
  await page.getByRole('textbox', { name: '4.1 Nature du projet, y' }).fill('a');
  await page.getByRole('textbox', { name: 'Objectifs du projet *' }).click();
  await page.getByRole('textbox', { name: 'Objectifs du projet *' }).fill('a');
  await page.getByRole('textbox', { name: 'Dans sa phase travaux *' }).click();
  await page.getByRole('textbox', { name: 'Dans sa phase travaux *' }).fill('a');
  await page.getByRole('textbox', { name: '4.3.2 Dans sa phase d\'' }).click();
  await page.getByRole('textbox', { name: '4.3.2 Dans sa phase d\'' }).fill('a');
  await page.getByRole('textbox', { name: 'Grandeurs caractéristiques du' }).click();
  await page.getByRole('textbox', { name: 'Grandeurs caractéristiques du' }).fill('a');
  await page.getByRole('textbox', { name: 'Valeur(s) *' }).click();
  await page.getByRole('textbox', { name: 'Valeur(s) *' }).fill('a');
  await page.getByRole('textbox', { name: 'Unité *' }).click();
  await page.getByRole('textbox', { name: 'Unité *' }).fill('a');
  await page.getByText('Exp: 20 Rue Lecourbe 75015 ParisExp: 20 Rue Lecourbe 75015 ParisSupprimer').click();
  await page.getByRole('textbox', { name: 'Exp: 20 Rue Lecourbe 75015' }).pressSequentially('paris');
  await page.getByRole('option', { name: 'Paris', exact: true }).click();
  await page.getByRole('textbox', { name: 'Préciser le document d’' }).click();
  await page.getByRole('textbox', { name: 'Préciser le document d’' }).fill('a');
  await page.getByLabel('Dans une zone naturelle d’int').getByText('Non').click();
  await page.getByLabel('En zone de montagne ?').getByText('Non').click();
  await page.getByLabel('Dans une zone couverte par un').getByText('Non').click();
  await page.getByLabel('Sur le territoire d’une commune').getByText('Non').click();
  await page.getByLabel('Dans un parc national, un parc').getByText('Non').click();
  await page.getByLabel('Sur un territoire couvert par un').getByText('Non').click();
  await page.getByLabel('Dans un bien inscrit au patrimoine').getByText('Non').click();
  await page.getByLabel('Dans une zone humide ayant fait').getByText('Non').click();
  await page.getByLabel('Dans une commune couverte par un').getByText('Non').click();
  await page.getByLabel('Si oui, est-il prescrit ou approuvé ?').getByText('Non').click();
  await page.getByLabel('Dans un site ou sur des sols pollués ?').getByText('Non').click();
  await page.getByLabel('Dans une zone de répartition des eaux ?').getByText('Non').click();
  await page.getByLabel('Dans un périmètre de protection rapprochée d\'un').getByText('Non').click();
  await page.getByLabel('Dans un site inscrit ?').getByText('Non').click();
  await page.getByLabel('D’un site Natura 2000 ?').getByText('Non').click();
  await page.getByLabel('D’un site classé ?').getByText('Non').click();
  await page.getByLabel('Engendre-t-il des prélèvements d\'eau ?').getByText('Non').click();
  await page.getByLabel('Impliquera-t-il des drainages / ou des ').getByText('Non').click();
  await page.getByLabel('Est-il excédentaire en matériaux').getByText('Non').click();
  await page.getByLabel('Est-il déficitaire en matériaux').getByText('Non').click();
  await page.getByLabel('Si oui, utilise-t-il les ressources naturelles').getByText('Non').click();
  await page.getByLabel('Est-il en adéquation avec les ressources disponibles').getByText('Non').click();
  await page.getByRole('textbox', { name: 'De quelle nature ? De quelle importance *' }).click();
  await page.getByRole('textbox', { name: 'De quelle nature ? De quelle importance *' }).fill('a');
  await page.getByLabel('Est-il susceptible d\'entraîner des perturbations').getByText('Non').click();
  await page.getByLabel('Si le projet est situé dans ou à proximité d’un site Natura 2000').getByText('Non').click();
  await page.getByLabel('Engendre-t-il la consommation d\'espaces naturels').getByText('Non').click();
  await page.getByLabel('Est-il concerné par des risques technologiques').getByText('Non').click();
  await page.getByLabel('Est-il concerné par des risques naturels').getByText('Non').click();
  await page.getByLabel('Engendre-t-il des risques sanitaires').getByText('Non').click();
  await page.getByLabel('Est-il concerné par des risques sanitaires').getByText('Non').click();
  await page.getByLabel('Engendre-t-il des déplacements/des trafics').getByText('Non').click();
  await page.getByLabel('Est-il source de bruit').getByText('Non').click();
  await page.getByLabel('Est-il concerné par des nuisances sonores').getByText('Non').click();
  await page.getByLabel('Engendre-t-il des odeurs').getByText('Non').click();
  await page.getByLabel('Est-il concerné par des nuisances olfactives').getByText('Non').click();
  await page.getByLabel('Engendre-t-il des vibrations').getByText('Non').click();
  await page.getByLabel('Est-il concerné par des vibrations').getByText('Non').click();
  await page.getByLabel('Engendre-t-il des émissions lumineuses').getByText('Non').click();
  await page.getByLabel('Est-il concerné par des émissions lumineuses').getByText('Non').click();
  await page.getByLabel('Engendre-t-il des rejets dans l\'air').getByText('Non').click();
  await page.getByLabel('Engendre-t-il des rejets liquides').getByText('Non').click();
  await page.getByLabel('Engendre-t-il des effluents').getByText('Non').click();
  await page.getByLabel('Engendre-t-il la production de déchets non dangereux, inertes, dangereux').getByText('Non').click();
  await page.getByLabel('Est-il susceptible de porter atteinte au patrimoine architectural').getByText('Non').click();
  await page.getByLabel('Engendre-t-il des modifications sur les activités humaines').getByText('Non').click();
  await page.getByLabel('6.2 les incidences du projet identifiées au 6.1 sont-elle susceptibles').getByText('Non').click();
  await page.getByLabel('6.3 Les incidences du projet identifiées au 6.1 sont-elles susceptibles').getByText('Non').click();
  //page 2
  await page.getByRole('button', { name: 'Page suivante   ' }).click();
  await page.getByRole('textbox', { name: 'Numéro SIRET *' }).click();
  await page.getByRole('textbox', { name: 'Numéro SIRET *' }).fill('35600000000048');
  await page.getByRole('textbox', { name: 'Raison sociale *' }).click();
  await page.getByRole('textbox', { name: 'Raison sociale *' }).fill('a');
  await page.getByText('Forme juridique').click();
  await page.getByRole('option', { name: 'L\'État' }).click();
  await page.getByRole('textbox', {name: 'Nom *', exact: true }).first().click();
  await page.getByRole('textbox', {name: 'Nom *', exact: true }).first().fill('a');
  await page.getByRole('textbox', {name: 'Prénom *', exact: true }).first().click();
  await page.getByRole('textbox', {name: 'Prénom *', exact: true }).first().fill('a');
  await page.getByRole('textbox', {name: 'Courriel : exemple@mail.fr'}).first().click();
  await page.getByRole('textbox', {name: 'Courriel : exemple@mail.fr'}).first().fill('a@a.com');
  await page.getByRole('textbox', {name: 'Nom *', exact: true }).last().click();
  await page.getByRole('textbox', {name: 'Nom *', exact: true }).last().fill('a');
  await page.getByRole('textbox', {name: 'Prénom *', exact: true }).last().click();
  await page.getByRole('textbox', {name: 'Prénom *', exact: true }).last().fill('a');
  await page.getByRole('textbox', { name: 'Qualité *' }).click();
  await page.getByRole('textbox', { name: 'Qualité *' }).fill('a');
  await page.getByRole('textbox', { name: 'Tél : +XX X XX XX XX XX *' }).click();
  await page.getByRole('textbox', { name: 'Tél : +XX X XX XX XX XX *' }).pressSequentially('666666666');
  await page.getByRole('textbox', { name: 'Fax' }).click();
  await page.getByRole('textbox', { name: 'Fax' }).pressSequentially('666666666');
  await page.getByRole('textbox', {name: 'Courriel : exemple@mail.fr'}).nth(1).click();
  await page.getByRole('textbox', {name: 'Courriel : exemple@mail.fr'}).nth(1).fill('a@a.com');
  await page.getByRole('button', { name: 'Page suivante   ' }).click();
  //page 3
  await page.getByRole('button', { name: '2.Un plan de situation au 1/' }).setInputFiles({
  name: 'file.txt',
  mimeType: 'text/plain',
  buffer: Buffer.from('this is test')
});
  await page.getByRole('button', { name: '3. Au minimum, 2' }).setInputFiles({
  name: 'file.txt',
  mimeType: 'text/plain',
  buffer: Buffer.from('this is test')
});
  await page.getByRole('button', { name: '4.Un plan du projet ou, pour' }).setInputFiles({
  name: 'file.txt',
  mimeType: 'text/plain',
  buffer: Buffer.from('this is test')
});
  await page.getByRole('checkbox', { name: 'Je certifie sur l’honneur l’' }).check();
  await page.getByRole('textbox', { name: 'Nom *', exact: true }).click();
  await page.getByRole('textbox', { name: 'Nom *', exact: true }).fill('a');
  await page.getByRole('textbox', { name: 'Prénom *' }).click();
  await page.getByRole('textbox', { name: 'Prénom *' }).fill('a');
  await page.getByRole('textbox', { name: 'Qualité du signataire *' }).click();
  await page.getByRole('textbox', { name: 'Qualité du signataire *' }).fill('a');
  await page.getByRole('textbox', { name: 'Fait à : *' }).click();
  await page.getByRole('textbox', { name: 'Fait à : *' }).fill('a');
});