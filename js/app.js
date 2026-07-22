// ============================================
//  CleanSen — Données & Logique Principale
//  Services de Nettoyage Dakar & Mbour, Sénégal
// ============================================

// ─── DONNÉES SERVICES ───
const SERVICES_DOMICILE = [
  { id: 'menage-standard', nom: 'Ménage Standard', desc: 'Nettoyage complet de votre domicile', duree: '2-3h', prix: 15000, icone: '🧹' },
  { id: 'menage-profond', nom: 'Nettoyage en Profondeur', desc: 'Nettoyage intensif pièce par pièce', duree: '4-6h', prix: 28000, icone: '✨' },
  { id: 'vitrerie', nom: 'Lavage de Vitres', desc: 'Fenêtres, baies vitrées, miroirs', duree: '1-2h', prix: 8000, icone: '🪟' },
  { id: 'fin-chantier', nom: 'Fin de Chantier', desc: 'Après rénovation ou construction', duree: '6-8h', prix: 45000, icone: '🏗️' },
  { id: 'moquette', nom: 'Nettoyage Moquette & Tapis', desc: 'Shampooing professionnel, séchage rapide', duree: '2-4h', prix: 20000, icone: '🟫' },
  { id: 'canapé', nom: 'Nettoyage Canapé & Literie', desc: 'Tissu, cuir, matelas, coussins', duree: '1-3h', prix: 12000, icone: '🛋️' },
  { id: 'cuisine', nom: 'Dégraissage Cuisine', desc: 'Four, hotte, surfaces, joints', duree: '2-3h', prix: 18000, icone: '🍳' },
  { id: 'sdb', nom: 'Sanitaires & Salle de bain', desc: 'Anti-calcaire, désinfection complète', duree: '1-2h', prix: 9000, icone: '🚿' },
  { id: 'demenagement', nom: 'Nettoyage Déménagement', desc: 'Avant entrée ou après départ', duree: '4-5h', prix: 35000, icone: '📦' },
];

const SERVICES_BUREAU = [
  { id: 'bureau-quotidien', nom: 'Entretien Quotidien', desc: 'Nettoyage journalier de vos locaux', duree: 'Contrat', prix: 80000, icone: '📋', periode: '/mois' },
  { id: 'bureau-hebdo', nom: 'Nettoyage Hebdomadaire', desc: 'Passages réguliers chaque semaine', duree: 'Contrat', prix: 35000, icone: '🗓️', periode: '/mois' },
  { id: 'vitrerie-bureau', nom: 'Lavage de Vitres Bureaux', desc: 'Façades, cloisons, espaces communs', duree: 'Sur devis', prix: 15000, icone: '🏢', periode: '/passage' },
  { id: 'desinfection', nom: 'Désinfection Sanitaire', desc: 'Normes ISO, produits homologués', duree: '2-4h', prix: 25000, icone: '🦠', periode: '/passage' },
  { id: 'parkings', nom: 'Nettoyage Parkings', desc: 'Lavage haute pression, marquage', duree: 'Sur devis', prix: 30000, icone: '🅿️', periode: '/passage' },
  { id: 'cafeteria', nom: 'Cafétéria & Cuisine Pro', desc: 'HACCP, normes alimentaires', duree: '2-3h', prix: 22000, icone: '☕', periode: '/passage' },
];

const SERVICES_INDUSTRIE = [
  { id: 'usine-sol', nom: 'Nettoyage Sol Industriel', desc: 'Autolaveuse, décapage, cristallisation', duree: 'Sur devis', prix: 150000, icone: '🏭', periode: '/chantier' },
  { id: 'cuve', nom: 'Nettoyage Cuves & Citernes', desc: 'Certification ATEX, travail en espace confiné', duree: 'Sur devis', prix: 300000, icone: '🛢️', periode: '/chantier' },
  { id: 'facade', nom: 'Ravalement & Façades', desc: 'Hydrogommage, projection, traitement', duree: 'Sur devis', prix: 200000, icone: '🏗️', periode: '/chantier' },
  { id: 'degraissage-ind', nom: 'Dégraissage Industriel', desc: 'Lignes de production, machines, convoyeurs', duree: 'Sur devis', prix: 250000, icone: '⚙️', periode: '/chantier' },
  { id: 'toiture-ind', nom: 'Nettoyage Toiture Industrielle', desc: 'Tuile, zinc, panneaux solaires', duree: 'Sur devis', prix: 180000, icone: '🏭', periode: '/chantier' },
  { id: 'chantier-travaux', nom: 'Chantier Travaux Publics', desc: 'Nettoyage de routes, chaussées, caniveaux', duree: 'Sur devis', prix: 400000, icone: '🚧', periode: '/chantier' },
];

// ─── ÉQUIPES DE NETTOYAGE ───
const EQUIPES = [
  {
    id: 1, nom: 'Khady Diallo', initiales: 'KD', couleur: '#00BCD4',
    role: 'Chef d\'équipe Domicile', experience: 6,
    note: 4.9, avis: 234, interventions: 780,
    ville: 'Dakar', disponible: true,
    competences: ['Ménage profond', 'Vitrerie', 'Fin de chantier', 'Post-déménagement'],
    bio: 'Chef d\'équipe passionnée avec 6 ans d\'expérience. Spécialisée dans le nettoyage haute gamme de villas et appartements à Dakar.'
  },
  {
    id: 2, nom: 'Mariama Sow', initiales: 'MS', couleur: '#00E5A0',
    role: 'Responsable Bureau & Commerce', experience: 8,
    note: 4.8, avis: 187, interventions: 1200,
    ville: 'Dakar', disponible: true,
    competences: ['Entretien bureaux', 'Désinfection', 'Normes HACCP', 'Vitrerie façade'],
    bio: 'Spécialiste de l\'entretien de locaux professionnels. Gère une équipe de 4 agents formés aux normes sanitaires internationales.'
  },
  {
    id: 3, nom: 'Ibou Niang', initiales: 'IN', couleur: '#FFB300',
    role: 'Expert Nettoyage Industriel', experience: 12,
    note: 4.7, avis: 89, interventions: 420,
    ville: 'Dakar', disponible: false,
    competences: ['Cuves & citernes', 'Espace confiné', 'ATEX', 'Haute pression'],
    bio: 'Technicien certifié pour le nettoyage industriel. Habilitations ATEX et travaux en espace confiné. Expert reconnu à Dakar.'
  },
  {
    id: 4, nom: 'Rokhaya Mbaye', initiales: 'RM', couleur: '#E91E63',
    role: 'Spécialiste Textile & Meubles', experience: 5,
    note: 5.0, avis: 112, interventions: 345,
    ville: 'Mbour', disponible: true,
    competences: ['Canapés', 'Moquette', 'Matelas', 'Rideau'],
    bio: 'Experte en nettoyage de textiles et mobilier. Utilise des produits éco-certifiés pour des résultats impeccables à Mbour et Saly.'
  },
  {
    id: 5, nom: 'Cheikh Gueye', initiales: 'CG', couleur: '#9C27B0',
    role: 'Chef Équipe Mbour & Saly', experience: 7,
    note: 4.8, avis: 156, interventions: 520,
    ville: 'Mbour', disponible: true,
    competences: ['Villas', 'Hôtels', 'Résidences', 'Fin de chantier'],
    bio: 'Responsable des opérations sur la Petite Côte. Spécialisé dans le nettoyage de villas et résidences touristiques à Saly et Mbour.'
  },
  {
    id: 6, nom: 'Fatou Badji', initiales: 'FB', couleur: '#26C6DA',
    role: 'Spécialiste Désinfection', experience: 4,
    note: 4.6, avis: 78, interventions: 290,
    ville: 'Dakar', disponible: true,
    competences: ['Désinfection COVID', 'Anti-moisissures', 'Fumigation', 'Traitement air'],
    bio: 'Technicienne en désinfection et traitement sanitaire. Formée aux protocoles post-pandémie. Intervention d\'urgence 24h/24.'
  },
];

// ─── TÉMOIGNAGES ───
const TEMOIGNAGES_CLEAN = [
  { id:1, texte:'Service exceptionnel ! Mon appartement n\'a jamais été aussi propre. L\'équipe de Khady est professionnelle et très soigneuse.', auteur:'Aïda Diop', ville:'Dakar, Almadies', note:5, initiales:'AD', couleur:'#00BCD4', date:'il y a 2 jours', service:'Nettoyage en profondeur' },
  { id:2, texte:'Nous avons signé un contrat mensuel pour nos bureaux. Équipe ponctuelle, produits de qualité, aucune réclamation en 8 mois !', auteur:'Amadou Ndiaye', ville:'Dakar, Plateau', note:5, initiales:'AN', couleur:'#00E5A0', date:'il y a 1 semaine', service:'Entretien bureaux quotidien' },
  { id:3, texte:'Nettoyage de fin de chantier impeccable. Ils ont rendu l\'appartement prêt à l\'emménagement. Je recommande vivement !', auteur:'Oumar Ba', ville:'Mbour, Saly', note:5, initiales:'OB', couleur:'#FFB300', date:'il y a 3 jours', service:'Fin de chantier' },
  { id:4, texte:'Traitement anti-moisissures de ma salle de bain. Résultat bluffant ! Fatou a été très professionnelle et rapide.', auteur:'Bineta Sall', ville:'Dakar, Mermoz', note:4, initiales:'BS', couleur:'#E91E63', date:'il y a 5 jours', service:'Désinfection sanitaire' },
  { id:5, texte:'Nettoyage de notre usine en un week-end. Travail sérieux, équipe motivée, résultat conforme à nos exigences ISO.', auteur:'Moussa Traoré', ville:'Dakar, Zone Industrielle', note:5, initiales:'MT', couleur:'#9C27B0', date:'il y a 2 semaines', service:'Nettoyage industriel' },
  { id:6, texte:'Mes canapés étaient comme neufs après le passage de l\'équipe. Prix correct et traitement avec des produits éco. Bravo !', auteur:'Seynabou Ly', ville:'Mbour Centre', note:5, initiales:'SL', couleur:'#FF5722', date:'hier', service:'Nettoyage canapés' },
];

// ─── FORMULES TARIFS ───
const FORMULES = [
  {
    id: 'essentiel', nom: 'Essentiel', icone: '🌿',
    prix: 25000, periode: '/mois', featured: false,
    desc: 'Pour les petits logements et besoins ponctuels',
    features: [
      { label: '1 passage par semaine', ok: true },
      { label: 'Jusqu\'à 60 m²', ok: true },
      { label: 'Produits inclus', ok: true },
      { label: 'Équipe 1 personne', ok: true },
      { label: 'Vitrerie incluse', ok: false },
      { label: 'Nettoyage textiles', ok: false },
    ]
  },
  {
    id: 'confort', nom: 'Confort', icone: '✨',
    prix: 55000, periode: '/mois', featured: true,
    desc: 'Notre offre la plus populaire pour les familles',
    features: [
      { label: '2 passages par semaine', ok: true },
      { label: 'Jusqu\'à 120 m²', ok: true },
      { label: 'Produits éco-certifiés', ok: true },
      { label: 'Équipe 2 personnes', ok: true },
      { label: 'Vitrerie incluse', ok: true },
      { label: 'Nettoyage textiles', ok: false },
    ]
  },
  {
    id: 'premium', nom: 'Premium', icone: '👑',
    prix: 95000, periode: '/mois', featured: false,
    desc: 'La solution complète pour villas et grandes surfaces',
    features: [
      { label: 'Passages illimités', ok: true },
      { label: 'Surface illimitée', ok: true },
      { label: 'Produits luxe premium', ok: true },
      { label: 'Équipe dédiée 3+ pers.', ok: true },
      { label: 'Vitrerie incluse', ok: true },
      { label: 'Nettoyage textiles inclus', ok: true },
    ]
  },
];

// ─── RÉSERVATIONS ───
let reservations = [
  { id:'RES-001', service:'Ménage Standard', date:'2026-07-28', heure:'09:00', adresse:'Almadies, Villa N°12', equipe:'Khady Diallo', statut:'confirme', montant:15000 },
  { id:'RES-002', service:'Nettoyage en profondeur', date:'2026-07-30', heure:'08:00', adresse:'Sacré-Cœur 3, Apt 4B', equipe:'Mariama Sow', statut:'en_attente', montant:28000 },
  { id:'RES-003', service:'Lavage canapés', date:'2026-07-25', heure:'14:00', adresse:'Mermoz, Rue 10', equipe:'Rokhaya Mbaye', statut:'en_cours', montant:12000 },
  { id:'RES-004', service:'Vitrerie appartement', date:'2026-07-20', heure:'10:00', adresse:'Point E, Imm. Tall', equipe:'Khady Diallo', statut:'termine', montant:8000 },
];

// ─── GALERIE AVANT/APRÈS ───
const GALERIE = [
  { id:1, titre:'Villa Almadies', service:'Nettoyage en profondeur', avant:'🏚️', apres:'🏠', ville:'Dakar', duree:'5h', note:5 },
  { id:2, titre:'Bureaux Plateau', service:'Entretien hebdomadaire', avant:'🗂️', apres:'🖥️', ville:'Dakar', duree:'3h', note:5 },
  { id:3, titre:'Villa Saly', service:'Fin de chantier', avant:'🧱', apres:'🏡', ville:'Mbour', duree:'7h', note:5 },
  { id:4, titre:'Canapés salon', service:'Nettoyage textiles', avant:'🛋️', apres:'✨', ville:'Dakar', duree:'2h', note:5 },
  { id:5, titre:'Cuisine restaurant', service:'Dégraissage professionnel', avant:'🍳', apres:'👨‍🍳', ville:'Mbour', duree:'4h', note:4 },
  { id:6, titre:'Usine Zone Ind.', service:'Nettoyage industriel', avant:'🏭', apres:'⚙️', ville:'Dakar', duree:'12h', note:5 },
];

// ─── ÉTAT ───
const STATE_CLEAN = {
  user: { nom:'Seynabou Ndiaye', initiales:'SN', ville:'Dakar', email:'seynabou@email.sn' },
  cartService: null,
  selectedDate: null,
  selectedTime: null,
};

// ─── UTILITAIRES ───
function formatCFA(n) { return n.toLocaleString('fr-SN') + ' FCFA'; }

function genStars(note, max=5) {
  let h='';
  for(let i=1;i<=max;i++) h += `<span style="color:${i<=note?'var(--warning)':'rgba(255,179,0,0.2)'}">★</span>`;
  return h;
}

function getStatutBadge(s) {
  return { confirme:{l:'Confirmé',c:'badge-fresh'}, en_attente:{l:'En attente',c:'badge-gold'}, en_cours:{l:'En cours',c:'badge-cyan'}, termine:{l:'Terminé',c:'badge-gray'} }[s] || {l:s,c:'badge-gray'};
}

function showToast(msg, type='success') {
  const c = document.getElementById('toast-container');
  if(!c) return;
  const icons = {success:'✅',error:'❌',info:'ℹ️'};
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.innerHTML = `<span>${icons[type]||'ℹ️'}</span><span>${msg}</span>`;
  c.appendChild(t);
  setTimeout(()=>t.remove(), 4000);
}

function initAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('animated'); obs.unobserve(e.target); } });
  }, {threshold:0.1, rootMargin:'0px 0px -50px 0px'});
  document.querySelectorAll('[data-animate]').forEach(el=>obs.observe(el));
}

function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        const target = parseInt(e.target.dataset.count);
        if(!isNaN(target)) animCounter(e.target, target);
        obs.unobserve(e.target);
      }
    });
  }, {threshold:0.5});
  document.querySelectorAll('[data-count]').forEach(el=>obs.observe(el));
}

function animCounter(el, target, dur=2000) {
  let start=0;
  const inc = target/(dur/16);
  const t = setInterval(()=>{
    start+=inc;
    if(start>=target){ el.textContent=Math.round(target).toLocaleString('fr-SN'); clearInterval(t); }
    else el.textContent=Math.round(start).toLocaleString('fr-SN');
  },16);
}

function initNavbar() {
  const nav = document.querySelector('.navbar');
  if(!nav) return;
  window.addEventListener('scroll', ()=>{
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

function spawnBubbles() {
  const hero = document.querySelector('.hero-cleansen');
  if(!hero) return;
  for(let i=0;i<12;i++) {
    const b = document.createElement('div');
    b.className='bubble';
    const size = Math.random()*40+10;
    b.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      animation-duration:${Math.random()*10+8}s;
      animation-delay:${Math.random()*5}s;
      opacity:${Math.random()*0.3+0.1};
    `;
    hero.appendChild(b);
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  initNavbar();
  initAnimations();
  initCounters();
  spawnBubbles();
  const loader = document.getElementById('page-loader');
  if(loader) setTimeout(()=>loader.classList.add('hidden'), 1500);
});
