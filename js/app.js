// ============================================
//  CleanSen — Données & Logique Principale
//  Style SenArtisan — Vert #00C853 / Or #FFD600
//  Services de Nettoyage Dakar & Mbour, Sénégal
// ============================================

const API_BASE_URL_CLEAN = 'http://localhost:5050/api/cleansen';

const API_CLEANSEN = {
  async getEquipes(params = {}) {
    try {
      const query = new URLSearchParams(params).toString();
      const res = await fetch(`${API_BASE_URL_CLEAN}/equipes?${query}`);
      const data = await res.json();
      return data.success ? data.data : null;
    } catch (e) {
      console.warn('⚠️ Mode offline (Backend API indisponible). Données locales utilisées.');
      return null;
    }
  },
  async createReservation(resData) {
    try {
      const res = await fetch(`${API_BASE_URL_CLEAN}/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resData)
      });
      return await res.json();
    } catch (e) {
      console.warn('⚠️ Mode offline (Backend API indisponible).', e);
      return { success: true, ref_res: `RES-${Math.floor(100000 + Math.random() * 900000)}` };
    }
  },
  async getReservations() {
    try {
      const res = await fetch(`${API_BASE_URL_CLEAN}/reservations`);
      const data = await res.json();
      return data.success ? data.data : null;
    } catch (e) {
      return null;
    }
  }
};


// ─── DONNÉES SERVICES ───
const SERVICES_DOMICILE = [
  { id: 'menage-standard', nom: 'Ménage Standard', desc: 'Nettoyage complet de votre domicile, pièce par pièce', duree: '2-3h', prix: 15000, icone: '🧹', popular: false },
  { id: 'menage-profond', nom: 'Nettoyage en Profondeur', desc: 'Nettoyage intensif, recoins, plinthes, dessous meubles', duree: '4-6h', prix: 28000, icone: '✨', popular: true },
  { id: 'vitrerie', nom: 'Lavage de Vitres', desc: 'Fenêtres, baies vitrées, miroirs intérieur & extérieur', duree: '1-2h', prix: 8000, icone: '🪟', popular: false },
  { id: 'fin-chantier', nom: 'Fin de Chantier', desc: 'Nettoyage après rénovation ou construction neuve', duree: '6-8h', prix: 45000, icone: '🏗️', popular: false },
  { id: 'moquette', nom: 'Moquette & Tapis', desc: 'Shampooing professionnel, extraction eau, séchage rapide', duree: '2-4h', prix: 20000, icone: '🟫', popular: false },
  { id: 'canape', nom: 'Canapés & Literie', desc: 'Tissu, cuir, matelas, coussins, traitement anti-acariens', duree: '1-3h', prix: 12000, icone: '🛋️', popular: true },
  { id: 'cuisine', nom: 'Dégraissage Cuisine', desc: 'Four, hotte, carrelage, joints, surfaces inox', duree: '2-3h', prix: 18000, icone: '🍳', popular: false },
  { id: 'sdb', nom: 'Sanitaires & Salle de bain', desc: 'Anti-calcaire, détartrage, désinfection complète', duree: '1-2h', prix: 9000, icone: '🚿', popular: false },
  { id: 'demenagement', nom: 'Nettoyage Déménagement', desc: 'État des lieux entrant ou sortant, du sol au plafond', duree: '4-5h', prix: 35000, icone: '📦', popular: false },
];

const SERVICES_BUREAU = [
  { id: 'bureau-quotidien', nom: 'Entretien Quotidien', desc: 'Nettoyage journalier de vos locaux professionnels', duree: 'Contrat', prix: 80000, icone: '📋', periode: '/mois', popular: true },
  { id: 'bureau-hebdo', nom: 'Passage Hebdomadaire', desc: 'Nettoyage approfondi une fois par semaine', duree: 'Contrat', prix: 35000, icone: '🗓️', periode: '/mois', popular: false },
  { id: 'vitrerie-bureau', nom: 'Vitres & Façades', desc: 'Façades vitrées, cloisons, espaces communs', duree: 'Sur devis', prix: 15000, icone: '🏢', periode: '/passage', popular: false },
  { id: 'desinfection', nom: 'Désinfection Sanitaire', desc: 'Produits homologués, protocoles certifiés ISO', duree: '2-4h', prix: 25000, icone: '🦠', periode: '/passage', popular: false },
  { id: 'parkings', nom: 'Parkings & Espaces Ext.', desc: 'Lavage haute pression, balayage mécanisé', duree: 'Sur devis', prix: 30000, icone: '🅿️', periode: '/passage', popular: false },
  { id: 'cafeteria', nom: 'Cafétéria & Cuisine Pro', desc: 'Normes HACCP, surfaces alimentaires certifiées', duree: '2-3h', prix: 22000, icone: '☕', periode: '/passage', popular: false },
];

const SERVICES_INDUSTRIE = [
  { id: 'usine-sol', nom: 'Sol Industriel', desc: 'Autolaveuse industrielle, décapage, cristallisation', duree: 'Sur devis', prix: 150000, icone: '🏭', periode: '/chantier' },
  { id: 'cuve', nom: 'Cuves & Citernes', desc: 'Certification ATEX, travail en espace confiné', duree: 'Sur devis', prix: 300000, icone: '🛢️', periode: '/chantier' },
  { id: 'facade', nom: 'Façades & Ravalement', desc: 'Hydrogommage, projection sable, traitement hydrofuge', duree: 'Sur devis', prix: 200000, icone: '🏗️', periode: '/chantier' },
  { id: 'degraissage-ind', nom: 'Dégraissage Industriel', desc: 'Lignes production, machines, convoyeurs, moules', duree: 'Sur devis', prix: 250000, icone: '⚙️', periode: '/chantier' },
  { id: 'toiture-ind', nom: 'Toitures Industrielles', desc: 'Tuile bac acier, zinc, panneaux photovoltaïques', duree: 'Sur devis', prix: 180000, icone: '🔩', periode: '/chantier' },
  { id: 'chantier-travaux', nom: 'Travaux Publics', desc: 'Routes, caniveaux, espaces publics, chaussées', duree: 'Sur devis', prix: 400000, icone: '🚧', periode: '/chantier' },
];

// ─── ÉQUIPES ───
const EQUIPES = [
  { id:1, nom:'Khady Diallo', prenom:'Khady', initiales:'KD', couleur:'#00C853',
    role:'Chef d\'équipe Domicile', experience:6, note:4.9, avis:234, interventions:780,
    ville:'Dakar', quartier:'Almadies', disponible:true,
    competences:['Ménage profond','Vitrerie','Fin de chantier','Post-déménagement'],
    bio:'Chef d\'équipe passionnée avec 6 ans d\'expérience. Spécialisée dans le nettoyage haute gamme.' },
  { id:2, nom:'Mariama Sow', prenom:'Mariama', initiales:'MS', couleur:'#2196F3',
    role:'Responsable Bureaux', experience:8, note:4.8, avis:187, interventions:1200,
    ville:'Dakar', quartier:'Plateau', disponible:true,
    competences:['Entretien bureaux','Désinfection','HACCP','Vitrerie façade'],
    bio:'Gère une équipe de 4 agents formés aux normes sanitaires internationales.' },
  { id:3, nom:'Ibou Niang', prenom:'Ibou', initiales:'IN', couleur:'#FFD600',
    role:'Expert Industriel', experience:12, note:4.7, avis:89, interventions:420,
    ville:'Dakar', quartier:'Zone Ind.', disponible:false,
    competences:['Cuves & citernes','Espace confiné','ATEX','Haute pression'],
    bio:'Technicien certifié ATEX et espaces confinés. Expert reconnu à Dakar.' },
  { id:4, nom:'Rokhaya Mbaye', prenom:'Rokhaya', initiales:'RM', couleur:'#E91E63',
    role:'Spécialiste Textile', experience:5, note:5.0, avis:112, interventions:345,
    ville:'Mbour', quartier:'Saly', disponible:true,
    competences:['Canapés','Moquette','Matelas','Rideaux'],
    bio:'Experte en textiles et mobilier. Produits éco-certifiés à Mbour et Saly.' },
  { id:5, nom:'Cheikh Gueye', prenom:'Cheikh', initiales:'CG', couleur:'#9C27B0',
    role:'Chef Équipe Mbour', experience:7, note:4.8, avis:156, interventions:520,
    ville:'Mbour', quartier:'Centre', disponible:true,
    competences:['Villas','Hôtels','Résidences','Fin de chantier'],
    bio:'Responsable opérations Petite Côte. Spécialisé résidences touristiques.' },
  { id:6, nom:'Fatou Badji', prenom:'Fatou', initiales:'FB', couleur:'#00BCD4',
    role:'Spécialiste Désinfection', experience:4, note:4.6, avis:78, interventions:290,
    ville:'Dakar', quartier:'Mermoz', disponible:true,
    competences:['Désinfection COVID','Anti-moisissures','Fumigation','Traitement air'],
    bio:'Technicienne en désinfection. Intervention d\'urgence 24h/24.' },
];

// ─── TÉMOIGNAGES ───
const TEMOIGNAGES_CLEAN = [
  { id:1, texte:'Service exceptionnel ! Mon appartement n\'a jamais été aussi propre. L\'équipe de Khady est très professionnelle.', auteur:'Aïda Diop', ville:'Dakar, Almadies', note:5, initiales:'AD', couleur:'#00C853', service:'Nettoyage en profondeur' },
  { id:2, texte:'Contrat mensuel pour nos bureaux depuis 8 mois. Équipe ponctuelle, produits de qualité. Aucune réclamation !', auteur:'Amadou Ndiaye', ville:'Dakar, Plateau', note:5, initiales:'AN', couleur:'#2196F3', service:'Entretien bureaux quotidien' },
  { id:3, texte:'Nettoyage fin de chantier impeccable. L\'appartement était prêt à l\'emménagement. Je recommande vivement !', auteur:'Oumar Ba', ville:'Mbour, Saly', note:5, initiales:'OB', couleur:'#FFD600', service:'Fin de chantier' },
  { id:4, texte:'Traitement anti-moisissures de ma salle de bain. Résultat bluffant ! Fatou a été très professionnelle.', auteur:'Bineta Sall', ville:'Dakar, Mermoz', note:4, initiales:'BS', couleur:'#E91E63', service:'Désinfection sanitaire' },
  { id:5, texte:'Nettoyage de notre usine en un week-end. Travail sérieux, résultat conforme à nos exigences ISO.', auteur:'Moussa Traoré', ville:'Dakar, Zone Ind.', note:5, initiales:'MT', couleur:'#9C27B0', service:'Nettoyage industriel' },
  { id:6, texte:'Mes canapés étaient comme neufs. Prix correct, produits éco. Résultat au-delà de mes attentes !', auteur:'Seynabou Ly', ville:'Mbour Centre', note:5, initiales:'SL', couleur:'#FF5722', service:'Nettoyage canapés' },
];

// ─── FORMULES ───
const FORMULES = [
  { id:'essentiel', nom:'Essentiel', icone:'🌿', prix:25000, periode:'/mois', featured:false,
    desc:'Pour petits logements et besoins ponctuels',
    features:[
      {label:'1 passage par semaine',ok:true},{label:'Jusqu\'à 60 m²',ok:true},
      {label:'Produits inclus',ok:true},{label:'Équipe 1 personne',ok:true},
      {label:'Vitrerie incluse',ok:false},{label:'Nettoyage textiles',ok:false},
    ]},
  { id:'confort', nom:'Confort', icone:'✨', prix:55000, periode:'/mois', featured:true,
    desc:'Notre offre la plus populaire pour les familles',
    features:[
      {label:'2 passages par semaine',ok:true},{label:'Jusqu\'à 120 m²',ok:true},
      {label:'Produits éco-certifiés',ok:true},{label:'Équipe 2 personnes',ok:true},
      {label:'Vitrerie incluse',ok:true},{label:'Nettoyage textiles',ok:false},
    ]},
  { id:'premium', nom:'Premium', icone:'👑', prix:95000, periode:'/mois', featured:false,
    desc:'Solution complète villas et grandes surfaces',
    features:[
      {label:'Passages illimités',ok:true},{label:'Surface illimitée',ok:true},
      {label:'Produits luxe premium',ok:true},{label:'Équipe dédiée 3+ pers.',ok:true},
      {label:'Vitrerie incluse',ok:true},{label:'Nettoyage textiles inclus',ok:true},
    ]},
];

// ─── RÉSERVATIONS ───
let reservations = [
  { id:'RES-001', service:'Ménage Standard', icone:'🧹', date:'2026-07-28', heure:'09:00', adresse:'Almadies, Villa N°12', equipe:'Khady Diallo', statut:'confirme', montant:15000 },
  { id:'RES-002', service:'Nettoyage en profondeur', icone:'✨', date:'2026-07-30', heure:'08:00', adresse:'Sacré-Cœur 3, Apt 4B', equipe:'Mariama Sow', statut:'en_attente', montant:28000 },
  { id:'RES-003', service:'Lavage canapés', icone:'🛋️', date:'2026-07-25', heure:'14:00', adresse:'Mermoz, Rue 10', equipe:'Rokhaya Mbaye', statut:'en_cours', montant:12000 },
  { id:'RES-004', service:'Vitrerie appartement', icone:'🪟', date:'2026-07-20', heure:'10:00', adresse:'Point E, Imm. Tall', equipe:'Khady Diallo', statut:'termine', montant:8000 },
];

// ─── GALERIE ───
const GALERIE = [
  { id:1, titre:'Villa Almadies', service:'Nettoyage en profondeur', avant:'🏚️', apres:'🏠', ville:'Dakar', duree:'5h', note:5 },
  { id:2, titre:'Bureaux Plateau', service:'Entretien hebdomadaire', avant:'🗂️', apres:'🖥️', ville:'Dakar', duree:'3h', note:5 },
  { id:3, titre:'Villa Saly', service:'Fin de chantier', avant:'🧱', apres:'🏡', ville:'Mbour', duree:'7h', note:5 },
  { id:4, titre:'Canapés salon', service:'Nettoyage textiles', avant:'🛋️', apres:'✨', ville:'Dakar', duree:'2h', note:5 },
  { id:5, titre:'Cuisine restaurant', service:'Dégraissage pro', avant:'🍳', apres:'👨‍🍳', ville:'Mbour', duree:'4h', note:4 },
  { id:6, titre:'Usine Zone Ind.', service:'Nettoyage industriel', avant:'🏭', apres:'⚙️', ville:'Dakar', duree:'12h', note:5 },
];

// ─── UTILITAIRES ───
function formatCFA(n) { return n.toLocaleString('fr-SN') + ' FCFA'; }

function genererEtoiles(note, max=5) {
  let h='';
  for(let i=1;i<=max;i++) h+=`<span style="color:${i<=Math.floor(note)?'var(--accent)':'rgba(255,214,0,0.2)'}">★</span>`;
  return h;
}

function getStatutBadge(s) {
  const m = {
    confirme:   {label:'Confirmé',   cls:'badge-green'},
    en_attente: {label:'En attente', cls:'badge-gold'},
    en_cours:   {label:'En cours',   cls:'badge-blue'},
    termine:    {label:'Terminé',    cls:'badge-gray'},
  };
  return m[s] || {label:s, cls:'badge-gray'};
}

function showToast(msg, type='success') {
  const c = document.getElementById('toast-container');
  if(!c) return;
  const icons = {success:'✅', error:'❌', info:'ℹ️', warning:'⚠️'};
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.innerHTML = `<span>${icons[type]||'ℹ️'}</span><span style="flex:1;">${msg}</span>`;
  c.appendChild(t);
  setTimeout(()=>{ t.style.opacity='0'; t.style.transform='translateX(100%)'; setTimeout(()=>t.remove(),300); }, 4000);
}

function initAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('animated'); obs.unobserve(e.target); } });
  }, {threshold:0.1, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('[data-animate]').forEach(el => obs.observe(el));
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
  document.querySelectorAll('[data-count]').forEach(el => obs.observe(el));
}

function animCounter(el, target, dur=2000) {
  const suffix = el.dataset.suffix || '';
  let start = 0;
  const inc = target / (dur/16);
  const timer = setInterval(()=>{
    start += inc;
    if(start >= target) {
      el.textContent = Math.round(target).toLocaleString('fr-SN') + suffix;
      clearInterval(timer);
    } else {
      el.textContent = Math.round(start).toLocaleString('fr-SN') + suffix;
    }
  }, 16);
}

function initNavbar() {
  const nav = document.querySelector('.navbar');
  if(!nav) return;
  window.addEventListener('scroll', ()=>{
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, {passive:true});
}

function toggleMobileMenu() {
  const m = document.getElementById('mobile-menu');
  if(m) m.style.display = m.style.display === 'none' ? 'block' : 'none';
}

// ─── ENGINE ÉTAT SYNCHRONISÉ EN TEMPS RÉEL (DEMO PITCH) ───

function getStoredReservations() {
  const saved = localStorage.getItem('cleansen_reservations_data');
  if (saved) {
    try { return JSON.parse(saved); } catch(e) {}
  }
  localStorage.setItem('cleansen_reservations_data', JSON.stringify(reservations));
  return reservations;
}

function saveReservations(list) {
  localStorage.setItem('cleansen_reservations_data', JSON.stringify(list));
  window.dispatchEvent(new Event('cleansen_state_updated'));
}

function addReservationState(newRes) {
  const list = getStoredReservations();
  list.unshift(newRes);
  saveReservations(list);
  
  // Attempt backend API sync
  API_CLEANSEN.createReservation({
    prenom: newRes.client ? newRes.client.split(' ')[0] : 'Client',
    nom: newRes.client ? newRes.client.split(' ').slice(1).join(' ') : 'Demo',
    telephone: newRes.tel || '+221 77 000 00 00',
    email: newRes.email || 'client@demo.sn',
    service_nom: newRes.service,
    date_res: newRes.date,
    heure_res: newRes.heure,
    adresse: newRes.adresse,
    ville: newRes.ville || 'Dakar',
    equipe_nom: newRes.equipe,
    montant: newRes.montant
  });
}

function updateReservationStatusState(id, newStatut) {
  const list = getStoredReservations();
  const target = list.find(r => r.id === id);
  if (target) {
    target.statut = newStatut;
    saveReservations(list);
  }
}

// 🎲 SIMULATEUR D'INTERVENTION EN DIRECT (POUR LA DÉMO CLIENT)
function simulerNouvelleReservationDemo() {
  const servicesList = ['Ménage Standard', 'Nettoyage en Profondeur', 'Lavage de Vitres', 'Dégraissage Cuisine Pro', 'Canapés & Literie'];
  const clientsList = [
    { name: 'Abdoulaye Diallo', tel: '+221 77 654 32 10', addr: 'Almadies, Villa N°45', city: 'Dakar' },
    { name: 'Awa Ndiaye', tel: '+221 76 890 12 34', addr: 'Point E, Rue 3', city: 'Dakar' },
    { name: 'Ousmane Sarr', tel: '+221 70 123 99 88', addr: 'Saly Niakhniakhal', city: 'Mbour' },
    { name: 'Coumba Faye', tel: '+221 77 444 88 22', addr: 'Sacré-Cœur 3, Apt 12', city: 'Dakar' }
  ];
  const c = clientsList[Math.floor(Math.random() * clientsList.length)];
  const s = servicesList[Math.floor(Math.random() * servicesList.length)];
  const eq = EQUIPES[Math.floor(Math.random() * EQUIPES.length)];
  
  const newRes = {
    id: `RES-${Math.floor(100000 + Math.random() * 900000)}`,
    client: c.name,
    tel: c.tel,
    email: 'client.demo@senegal.sn',
    service: s,
    icone: '✨',
    date: '2026-07-28',
    heure: '10:00',
    adresse: c.addr,
    ville: c.city,
    equipe: eq.nom,
    montant: 15000 + Math.floor(Math.random() * 5) * 5000,
    statut: 'en_attente'
  };

  addReservationState(newRes);
  showToast(`🎉 Nouvelle réservation reçue de ${c.name} (${s}) !`, 'success');
  return newRes;
}

// 📄 TÉLÉCHARGEMENT FACTURE DÉMO
function telechargerFactureDemo(id) {
  const list = getStoredReservations();
  const r = list.find(x => x.id === id) || { id: id || 'RES-001', client: 'Seynabou Ndiaye', service: 'Ménage Standard', montant: 15000, date: '28/07/2026', equipe: 'Khady Diallo' };
  
  const content = `================================================
          FACTURE OFFICIELLE CLEANSEN SÉNÉGAL
================================================
Référence      : ${r.id}
Client         : ${r.client}
Service        : ${r.service}
Date Prestation: ${r.date}
Montant Total  : ${r.montant ? r.montant.toLocaleString('fr-SN') : '15 000'} FCFA
Statut Paiement: RÉGLÉ EN TOTALITÉ (TVA Incluse)
Équipe assignée: ${r.equipe || 'Khady Diallo'}
================================================
CleanSen Dakar • Mbour, Sénégal
NINEA: 009847123 • Tel: +221 33 800 00 00
Merci de votre confiance !
================================================`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Facture_${r.id}_CleanSen.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast(`📥 Facture ${r.id} générée et téléchargée !`, 'success');
}

// 📲 NOTIFICATION WHATSAPP DÉMO
function afficherModalWhatsApp(id) {
  const list = getStoredReservations();
  const r = list.find(x => x.id === id) || { id: id || 'RES-001', client: 'Seynabou Ndiaye', tel: '+221 77 123 45 67', service: 'Ménage Standard', date: '28/07/2026', heure: '09:00', equipe: 'Khady Diallo' };
  
  const msg = `💬 SIMULATION NOTIFICATION WHATSAPP :\n----------------------------------------\nPour: ${r.tel} (${r.client})\n\n"Bonjour ${r.client} ! Your CleanSen booking ${r.id} (${r.service}) is confirmed for ${r.date} at ${r.heure}. Team lead: ${r.equipe}."`;
  alert(msg);
}

document.addEventListener('DOMContentLoaded', ()=>{
  initNavbar();
  initAnimations();
  initCounters();
  const loader = document.getElementById('page-loader');
  if(loader) setTimeout(()=>loader.classList.add('hidden'), 1200);
});

