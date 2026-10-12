import city from '@/assets/city.webp.asset.json';
import tower from '@/assets/tower.webp.asset.json';
import aerial from '@/assets/aerial.webp.asset.json';
import night from '@/assets/night.webp.asset.json';
import conversation from '@/assets/conversation.webp.asset.json';
import audience from '@/assets/audience.webp.asset.json';
import details from '@/assets/details.webp.asset.json';
import behind from '@/assets/behind.webp.asset.json';
import logo from '@/assets/logo.webp.asset.json';
export const media = { city, tower, aerial, night, conversation, audience, details, behind, logo };
export const photos = [
 {src: night.url, alt: 'Guests dancing together beneath colourful lights at a cultural night', category: 'Events'},
 {src: details.url, alt: 'Carefully arranged plated food and drinks at an event', category: 'Commercial & Brand'},
 {src: city.url, alt: 'Brighton streets and rooftops viewed from above', category: 'Commercial & Brand'},
 {src: conversation.url, alt: 'A circle of guests sharing a conversation at an indoor event', category: 'Events'},
 {src: behind.url, alt: 'Photographer composing an image near the Houses of Parliament', category: 'Portraits'},
 {src: tower.url, alt: 'Aerial view of a glass observation pod above Brighton seafront', category: 'Commercial & Brand'},
 {src: audience.url, alt: 'Audience watching a presentation at a live event', category: 'Events'},
 {src: aerial.url, alt: 'Aerial perspective over the city and railway', category: 'Commercial & Brand'},
] as const;
export const projects = [
 {slug:'above-the-city', title:'Above the City', category:'Aerial · Places', cover:media.city.url, alt:photos[2].alt, description:'A different perspective on familiar streets. A study of architecture, movement and the spaces between.', images:[photos[2],photos[5],photos[7]]},
 {slug:'a-night-together', title:'A Night Together', category:'Events · People', cover:media.night.url, alt:photos[0].alt, description:'The energy of a room, the connections between people and the moments that make an evening memorable.', images:[photos[0],photos[3],photos[6]]},
 {slug:'the-finer-details', title:'The Finer Details', category:'Commercial · Details', cover:media.details.url, alt:photos[1].alt, description:'An exploration of texture, composition and the small details that tell a bigger story.', images:[photos[1]]},
];
export type Film = {title:string; category:string; image:string; alt:string; description:string; videoUrl:string|null};
export const films: Film[] = [
 {title:'ALOSTELLA — Showreel', category:'Photography & Film', image:media.tower.url, alt:photos[5].alt, description:'A curated introduction to people, places and stories.', videoUrl:null},
 {title:'A City in Motion', category:'Places · Aerial film', image:media.city.url, alt:photos[2].alt, description:'A new perspective on the rhythm of the city.', videoUrl:null},
 {title:'After the Lights', category:'Events · Short film', image:media.night.url, alt:photos[0].alt, description:'The atmosphere, the movement and the moments in between.', videoUrl:null},
];
export function pageHead(title:string, description:string, path:string) { return {meta:[{title:`${title} — ALOSTELLA`},{name:'description',content:description},{property:'og:title',content:`${title} — ALOSTELLA`},{property:'og:description',content:description},{property:'og:type',content:'website'},{property:'og:url',content:path},{name:'twitter:card',content:'summary_large_image'}], links:[{rel:'canonical',href:path}]}; }
