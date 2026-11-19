/**
 * Harshita's corporate training history: every client logo in the collage the
 * client supplied (.clipshot/image_20261119_150647_001.png), in its order.
 *
 * - 12 logos are openly licensed SVGs (Simple Icons / gilbarbara, CC0) in
 *   /public/clients; see icons-credits.json there.
 * - The other 77 were cut from that collage into /public/clients/collage/.
 *   They are small (cut from an ~800px image); swap in higher-resolution files
 *   with the same names when the client supplies them.
 * w/h are the cropped pixel sizes, used to size each logo without upscaling it
 * too far.
 */

export interface ClientLogo {
  name: string;
  src: string;
  w?: number;
  h?: number;
}

export const clients: ClientLogo[] = [
  { name: "Northern Tool + Equipment", src: "/clients/collage/northern-tool-equipment.png", w: 64, h: 22 },
  { name: "MEA", src: "/clients/collage/mea.png", w: 76, h: 57 },
  { name: "nurture.farm", src: "/clients/collage/nurture-farm.png", w: 76, h: 13 },
  { name: "Polaris", src: "/clients/collage/polaris.png", w: 67, h: 14 },
  { name: "MSCI", src: "/clients/collage/msci.png", w: 74, h: 24 },
  { name: "Carrier", src: "/clients/collage/carrier.png", w: 76, h: 34 },
  { name: "Continental", src: "/clients/collage/continental.png", w: 76, h: 28 },
  { name: "Hyundai", src: "/clients/hyundai.svg" },
  { name: "Genpact", src: "/clients/collage/genpact.png", w: 60, h: 25 },
  { name: "Delphi Technologies", src: "/clients/collage/delphi-technologies.png", w: 69, h: 29 },
  { name: "Nestlé", src: "/clients/collage/nestle.png", w: 70, h: 70 },
  { name: "IBM", src: "/clients/ibm.svg" },
  { name: "Signode", src: "/clients/collage/signode.png", w: 73, h: 20 },
  { name: "Daimler Truck", src: "/clients/collage/daimler-truck.png", w: 76, h: 29 },
  { name: "AJIO", src: "/clients/collage/ajio.png", w: 76, h: 76 },
  { name: "Landmark Group", src: "/clients/collage/landmark-group.png", w: 76, h: 21 },
  { name: "ASK", src: "/clients/collage/ask.png", w: 37, h: 39 },
  { name: "Mahindra", src: "/clients/mahindra.svg" },
  { name: "Andritz Hydro", src: "/clients/collage/andritz-hydro.png", w: 76, h: 32 },
  { name: "Crompton Greaves", src: "/clients/collage/crompton-greaves.png", w: 76, h: 29 },
  { name: "DST", src: "/clients/collage/dst.png", w: 76, h: 57 },
  { name: "Alkem", src: "/clients/collage/alkem.png", w: 76, h: 58 },
  { name: "PepsiCo", src: "/clients/collage/pepsico.png", w: 76, h: 23 },
  { name: "BearingPoint", src: "/clients/collage/bearingpoint.png", w: 76, h: 16 },
  { name: "JBPR & Co", src: "/clients/collage/jbpr-and-co.png", w: 68, h: 21 },
  { name: "Lowe's", src: "/clients/collage/lowe-s.png", w: 76, h: 38 },
  { name: "Marvell", src: "/clients/collage/marvell.png", w: 76, h: 26 },
  { name: "Myntra", src: "/clients/collage/myntra.png", w: 76, h: 28 },
  { name: "Ola", src: "/clients/collage/ola.png", w: 76, h: 30 },
  { name: "ICRA", src: "/clients/collage/icra.png", w: 70, h: 31 },
  { name: "General Motors", src: "/clients/generalmotors.svg" },
  { name: "Axis Bank", src: "/clients/axisbank.svg" },
  { name: "Ericsson", src: "/clients/ericsson.svg" },
  { name: "Sun Pharma", src: "/clients/collage/sun-pharma.png", w: 44, h: 54 },
  { name: "Aon", src: "/clients/collage/aon.png", w: 72, h: 30 },
  { name: "Hexagon", src: "/clients/collage/hexagon.png", w: 76, h: 27 },
  { name: "Wabtec", src: "/clients/collage/wabtec.png", w: 74, h: 29 },
  { name: "SPAR", src: "/clients/collage/spar.png", w: 73, h: 19 },
  { name: "Prime Venture Partners", src: "/clients/collage/prime-venture-partners.png", w: 72, h: 28 },
  { name: "The World Bank", src: "/clients/collage/the-world-bank.png", w: 62, h: 31 },
  { name: "Cairn", src: "/clients/collage/cairn.png", w: 62, h: 36 },
  { name: "AIG", src: "/clients/collage/aig.png", w: 72, h: 41 },
  { name: "Texas Instruments", src: "/clients/collage/texas-instruments.png", w: 66, h: 21 },
  { name: "The Times of India", src: "/clients/collage/the-times-of-india.png", w: 76, h: 37 },
  { name: "Indus Towers", src: "/clients/collage/indus-towers.png", w: 65, h: 87 },
  { name: "Novo Nordisk", src: "/clients/collage/novo-nordisk.png", w: 76, h: 55 },
  { name: "Vector", src: "/clients/collage/vector.png", w: 76, h: 21 },
  { name: "Landmark", src: "/clients/collage/landmark.png", w: 53, h: 41 },
  { name: "Xiaomi", src: "/clients/xiaomi.svg" },
  { name: "upGrad", src: "/clients/collage/upgrad.png", w: 66, h: 19 },
  { name: "Microland", src: "/clients/collage/microland.png", w: 73, h: 25 },
  { name: "PwC", src: "/clients/collage/pwc.png", w: 76, h: 59 },
  { name: "ABB", src: "/clients/abb.svg" },
  { name: "Fidelity", src: "/clients/collage/fidelity.png", w: 74, h: 24 },
  { name: "Roche", src: "/clients/collage/roche.png", w: 76, h: 42 },
  { name: "Emaar", src: "/clients/collage/emaar.png", w: 48, h: 48 },
  { name: "Flipkart", src: "/clients/collage/flipkart.png", w: 60, h: 61 },
  { name: "HQ Leadership", src: "/clients/collage/hq-leadership.png", w: 67, h: 44 },
  { name: "Dover", src: "/clients/collage/dover.png", w: 76, h: 29 },
  { name: "Nykaa", src: "/clients/collage/nykaa.png", w: 70, h: 28 },
  { name: "Larsen & Toubro", src: "/clients/collage/larsen-and-toubro.png", w: 52, h: 50 },
  { name: "HDFC Bank", src: "/clients/hdfcbank.svg" },
  { name: "ZF", src: "/clients/collage/zf.png", w: 54, h: 52 },
  { name: "United Phosphorus Limited", src: "/clients/collage/united-phosphorus-limited.png", w: 76, h: 60 },
  { name: "AstraZeneca", src: "/clients/collage/astrazeneca.png", w: 76, h: 24 },
  { name: "Eris", src: "/clients/collage/eris.png", w: 56, h: 26 },
  { name: "Techno Brain", src: "/clients/collage/techno-brain.png", w: 75, h: 23 },
  { name: "Jhavtech Studios", src: "/clients/collage/jhavtech-studios.png", w: 64, h: 42 },
  { name: "BioQuest", src: "/clients/collage/bioquest.png", w: 76, h: 24 },
  { name: "Sony", src: "/clients/sony.svg" },
  { name: "BYJU'S", src: "/clients/collage/byju-s.png", w: 74, h: 20 },
  { name: "Infosys", src: "/clients/infosys.svg" },
  { name: "Royal Enfield", src: "/clients/collage/royal-enfield.png", w: 56, h: 31 },
  { name: "BMW", src: "/clients/bmw.svg" },
  { name: "Omega Healthcare", src: "/clients/collage/omega-healthcare.png", w: 76, h: 29 },
  { name: "Amber Road", src: "/clients/collage/amber-road.png", w: 76, h: 22 },
  { name: "Medley", src: "/clients/collage/medley.png", w: 62, h: 50 },
  { name: "K Raheja Corp", src: "/clients/collage/k-raheja-corp.png", w: 50, h: 65 },
  { name: "Ryan Education School", src: "/clients/collage/ryan-education-school.png", w: 51, h: 70 },
  { name: "Trebound", src: "/clients/collage/trebound.png", w: 76, h: 43 },
  { name: "Zest", src: "/clients/collage/zest.png", w: 68, h: 24 },
  { name: "Dr. Reddy's", src: "/clients/collage/dr-reddy-s.png", w: 76, h: 31 },
  { name: "Reserve Bank of India", src: "/clients/collage/reserve-bank-of-india.png", w: 76, h: 76 },
  { name: "Randstad", src: "/clients/collage/randstad.png", w: 64, h: 54 },
  { name: "Royal Sundaram General Insurance", src: "/clients/collage/royal-sundaram-general-insurance.png", w: 72, h: 27 },
  { name: "Mindtree", src: "/clients/collage/mindtree.png", w: 66, h: 21 },
  { name: "Lupin", src: "/clients/collage/lupin.png", w: 76, h: 32 },
  { name: "Pepperfry", src: "/clients/collage/pepperfry.png", w: 71, h: 21 },
  { name: "Deloitte", src: "/clients/collage/deloitte.png", w: 58, h: 16 },
];
