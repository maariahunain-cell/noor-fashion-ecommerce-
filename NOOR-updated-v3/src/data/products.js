export const products = [
{id:'m1',category:'Men',name:'The Burgundy Élan Ensemble',price:23000,images:['/media/m1.webp','/media/m1-back.webp'],description:'A deep burgundy statement ensemble cut for formal evenings, with a refined silhouette and understated texture.',badge:'20% OFF'},
{id:'m2',category:'Men',name:'The Imperial Noir',price:17000,images:['/media/m2.webp'],description:'A polished contemporary formal look designed around clean tailoring and a confident finish.'},
{id:'m3',category:'Men',name:'The Midnight Crest',price:19350,images:['/media/m3.webp','/media/m3-back.webp'],description:'A dark embellished blazer with intricate detailing, designed for grand occasions.'},
{id:'m4',category:'Men',name:'The Sandstone Royale',price:22789,images:['/media/m4.webp','/media/m4-back.webp'],description:'A warm sandstone-toned ceremonial blazer balancing traditional detail with modern tailoring.'},
{id:'m5',category:'Men',name:'The Midnight Veil',price:13500,images:['/media/m5.webp','/media/m5-back.webp'],description:'A sophisticated midnight formal piece with a streamlined silhouette.'},
{id:'m6',category:'Men',name:'NOOR Signature Black & Gold Sequined Blazer',price:28500,images:['/media/men-hero.jpg','/media/m6.jpg'],description:'NOOR’s signature black-and-gold sequined blazer: bold, refined and made for an entrance.',badge:'NOOR SIGNATURE'},
{id:'w1',category:'Women',name:'The Champagne Reverie',price:59000,images:['/media/w1.webp','/media/w1-back.webp'],description:'An ivory-champagne gown with a graceful silhouette and luminous finish.',badge:'15% OFF'},
{id:'w2',category:'Women',name:'The Sage Serenade',price:19000,images:['/media/w2.webp','/media/w2-back.webp'],description:'A flowing sage evening gown with sculpted drape and an elegant, airy presence.'},
{id:'w3',category:'Women',name:'The Mauve Étoile',price:27650,images:['/media/w3.webp','/media/w3-back.webp'],description:'A mauve statement gown with intricate detailing and a soft, romantic silhouette.'},
{id:'w4',category:'Women',name:'NOOR Midnight Bloom Gown',price:31500,images:['/media/w4.webp','/media/w4-back.webp'],description:'A midnight-blue gown designed with quiet drama, depth and a grand evening profile.'},
{id:'w5',category:'Women',name:'NOOR Midnight Silver Sequin Gown',price:44520,images:['/media/w5.webp','/media/w5-back.webp'],description:'A silver-grey sequin gown that catches the light with every movement.'},
{id:'w6',category:'Women',name:'Grey/Silver Sequin Grand Gown',price:36900,images:['/media/w6.webp','/media/w6-back.webp'],description:'A grand silver-grey sequin gown with an elegant full-length silhouette.'},
{id:'w7',category:'Women',name:'The Noir Floral Reverie',price:31500,images:['/media/women-hero-product.jpg'],description:'A black-and-gold floral evening gown with a grand silhouette and luminous detailing.',badge:'NOOR HERO EDIT'}
]
export const featuredProducts=['m6','m3','w1','w5'].map(id=>products.find(p=>p.id===id))
