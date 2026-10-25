// The frame of the atlas: the six questions and their classifications, the seven parts and their essays,
// and the closing pages. Entries are in data/entries-*.js, the chart in data/chart.js.

window.CODES = {
  purpose: {key: "pu", tok: "p", label: "Purpose", short: "Purpose", names: {
    tradition: "Formation within a tradition",
    reform: "Reform and civilisation",
    service: "Service of the state",
    nation: "Nation and ideology",
    manpower: "Manpower and growth",
    emancipation: "Emancipation",
    person: "The whole person",
    access: "Access and literacy",
    measure: "Measured learning"}},
  medium: {key: "me", tok: "l", label: "Medium", short: "Medium", names: {
    classical: "A classical language",
    english: "English",
    vernacular: "The learner's own tongue",
    national: "A national language",
    mixed: "More than one, or left open"}},
  warrant: {key: "wa", tok: "w", label: "Warrant", short: "Warrant", names: {
    teacher: "The teacher",
    patron: "A patron",
    board: "An examining board",
    state: "The state",
    work: "The work itself"}},
  scope: {key: "sc", tok: "s", label: "Scope", short: "Scope", names: {
    open: "Open to all",
    few: "A class or the qualified few",
    restricted: "Restricted by birth, sex or community",
    widening: "Designed to widen the door"}},
  pays: {key: "py", tok: "y", label: "Who paid", short: "Paid by", names: {
    patron: "A patron or endowment",
    state: "The state",
    mission: "A mission",
    community: "The community",
    fees: "Households and fees",
    donors: "Donors and aid",
    self: "The pupils' own work"}},
  fate: {key: "fa", tok: "f", label: "Fate", short: "Fate", names: {
    kept: "Built and kept",
    converted: "Kept in form, converted in purpose",
    abandoned: "Adopted, then let go",
    defeated: "Refused or defeated",
    live: "Still open"}}
};

window.QUESTIONS = [
  ["purpose", "Purpose", "What was it for?",
   "Formation within a tradition, reform, service of the state, the nation, manpower, emancipation, the whole person, access, or measured learning?",
   `<p>The question asks for the end a document gave, not the end its critics found in it. Macaulay stated his: a class English in taste, to interpret between rulers and ruled. Wood stated his: European knowledge for moral and material improvement, and servants the government could trust. The Mughal order stated none, because it had no education policy; the purposes lived in the books it rewarded, Ṭūsī's ethics for the servant and the intended sciences for the scholar.</p>
   <p>The answers fall into three groups across the atlas. Before the Company, purposes belong to traditions: formation in <i>akhlāq</i>, in the religious sciences, in the service learning of the <i>munshī</i>. Under the Company and the Crown, purposes are the state's: reform, civilisation, service. The traditions answer with purposes of their own, and the purpose experiments of 1901 to 1947, Santiniketan, Jamia, Osmania and Wardha, are the subcontinent's most serious attempts to name the whole person as the end. After 1947 the vocabulary narrows again. Nation, manpower and access dominate, and measured learning arrives last, supplied by the reform literature rather than by any state.</p>
   <p>Two cautions. A stated purpose is evidence of intent, not of practice; the fate column shows how often the two parted. And the classification takes the leading purpose only. Wood wanted both reform and service; Deoband wanted both formation and the defence of a community. The entries say so where it matters.</p>`],
  ["medium", "Medium", "In what language?",
   "A classical language, English, the learner's own tongue, a national language, or more than one?",
   `<p>Language is where the subcontinent's quarrels about schooling have been loudest, and the atlas treats it as a question in its own right because it carries purpose in two ways. It decides who can learn at all, and it decides which tradition the learner enters.</p>
   <p>The famous quarrel of 1835 was over two classical options, Sanskrit and Arabic against English. The learner's own tongue was the option neither camp chose. William Adam argued for it in Bengal, the Delhi College practised it in Urdu, Roorkee taught engineering in it, and Wood's Despatch conceded it for the lower schools. The universities of 1857 settled the upper level in English, and that settlement has not been reversed in any of the three successor states.</p>
   <p>From the 1860s the question changed character. In the Urdu–Hindi controversy a script became a community and a community a claim on the school. Language became ideology before it became pedagogy. Osmania's Urdu university, Wardha's Hindustani and Pakistan's Urdu of 1948 are each a national language as much as a medium, and the Bengali Language Movement of 1948 to 1952 was the first great refusal of that kind of answer. The neighbours show the range of what followed: India's negotiated three languages, Bangladesh's mother tongue, and Malaysia's reversal of English for science and mathematics.</p>`],
  ["warrant", "Warrant", "Who certified the learning?",
   "The teacher, a patron, an examining board, the state, or the work itself?",
   `<p>The warrant is the authority that says a person has learned. It matters because whatever certifies learning becomes the motive for it. The question is the series' account of the colonial inheritance in one word.</p>
   <p>In the Mughal order the warrant was personal. A teacher's <i>ijāza</i> licensed a pupil to transmit a text; a patron's grant or a post in the Persian-literate service recognised a scholar. Wood's Despatch of 1854 moved the warrant to an examining board on the London model, and the universities of 1857 examined students they did not teach. The colleges became clients of the examiner. A board can certify content. It cannot certify character, judgement or what a person is for, and so the purposes that colonial and national documents named had no place in the institution that certified.</p>
   <p>The answers that resisted the board are the atlas's test cases. Deoband examined its own students and kept the teacher's chain. Leitner wanted a teaching university for Lahore and lost. Sadler's commission attacked the affiliating model and Dhaka was built against it. Wardha proposed that the work itself, the thread spun and the crop grown, should be the evidence. After 1947 the state became the last warrant: equivalence for the madrasa's <i>sanad</i>, recognition by the Higher Education Commission, the count of papers and PhDs.</p>`],
  ["scope", "Scope", "Who might learn?",
   "Everyone, a class or the qualified few, those allowed by birth, sex or community, or a design to widen the door?",
   `<p>Scope is the question on which the traditions and the colonial state can both be indicted, and the atlas records both indictments. The Brahmanical order rationed learning by birth; the <i>ashrāf</i> and <i>ajlāf</i> hierarchy narrowed Muslim learning by descent; girls were schooled, where they were schooled, for the household. Phule and Ambedkar are the counter-witnesses: for them colonial schooling was a door, not a rupture.</p>
   <p>The colonial state's own scope was the few. Downward filtration meant educating a class and trusting knowledge to trickle. Wood and the Hunter Commission turned toward the many in principle, and spent on the few in practice. The thickest purposes in the atlas, Santiniketan's and Aligarh's and the Dars-i Niẓāmī's, were offered to narrow scopes, and the widest scopes, the Right to Education Act and Article 25-A, came with the thinnest purposes. That is the pattern the series names: thick purpose with narrow scope, wide scope with thin purpose.</p>
   <p>Wardha is the one design in the atlas that tried to put a thick purpose at universal scope. Bangladesh's girls' stipend and BRAC's schools are the clearest cases of widening that worked without naming a thick purpose at all.</p>`],
  ["pays", "Who Paid", "Who paid?",
   "A patron or endowment, the state, a mission, the community, households, donors, or the pupils' own work?",
   `<p>Money sets the horizon of an institution. Endowments and grants that outlive a patron allow long goods; annual budgets and donor projects allow short ones. The atlas asks who paid because the answer explains much of what each institution could be for.</p>
   <p>The Mughal order paid scholars, not schools, through revenue grants and endowments. The Company paid a lakh of rupees a year from 1813 and argued for twenty years about what it bought. Missions paid for much of the English schooling of the early nineteenth century, and Wood's grants-in-aid made the state a co-payer with whoever else would build. The Muslim responses invented a new answer: Deoband ran on public subscription, and Aligarh on the subscriptions of the respectable and the gifts of princes. Wardha's answer was the most radical, that the school should pay for itself through the pupils' craft, and it was the answer its critics attacked first.</p>
   <p>After 1947 the state took over, then retreated. Pakistan's waqf ordinances absorbed the endowments, nationalisation in 1972 absorbed the private schools, and by the 2020s households carried much of the bill through low-fee private schools. Bangladesh's divergence ran through donors and NGOs as much as through its state.</p>`],
  ["fate", "Fate", "What became of it?",
   "Built and kept, kept in form but converted in purpose, adopted and let go, refused or defeated, or still open?",
   `<p>The last question is the one the series turns on, and it is the hardest to answer fairly. A document can be adopted and kept, its institutions still standing. It can be kept in form and converted in purpose: the examining university that kept Wood's structure and lost his reform, the ideological purpose that reached the school as Islamiyat and Pakistan Studies and stopped there. It can be adopted and let go, as India adopted Basic Education and quietly dropped it. It can be refused outright, as the Orientalists were in 1835 and Leitner in 1882. Or it can be still open.</p>
   <p>Conversion is the commonest fate in the atlas, and the one most worth studying. It happens when a purpose is enacted through machinery that cannot carry it: an examination, a credential, an equivalence. Malaysia's written philosophy and Pakistan's preambles are opposite starting points that reached similar ends by this route.</p>
   <p>Each answer here is a judgement about a long history, and many are contestable. The entries give the reasons, and the readings are the place to disagree.</p>`]
];

window.PARTS = {
  mughal: ["The Mughal order", "to c. 1800", "The Mughal Order: Learning Rewarded, Not Provided", `
    <p>The Mughal state had no education policy, and that absence is the baseline for everything that follows. It did not build schools. It rewarded learning: revenue grants (<i>madad-i maʿāsh</i>) to scholars and holy men, endowments for madrasas and shrines, and employment for those who mastered Persian prose and accounts. The warrant was personal. A teacher's <i>ijāza</i> licensed a pupil; a patron's grant recognised a scholar. The state paid for scholars, not schools.</p>
    <p>Purposes were not missing. They lived in the books the order rewarded. Ṭūsī's <i>Akhlāq-i Nāṣirī</i> formed the servant of the state and the head of a household. The Dars-i Niẓāmī of Farangī Maḥall trained the scholar in instrumental sciences for the sake of the intended ones. Akbar pushed the curriculum toward the rational sciences, and Chandar Bhan Brahman's advice to his son shows a Hindu <i>munshī</i> formed in the same Persian canon as a Muslim one. Learning for service is not a colonial invention.</p>
    <p>What the order did not do should be said as plainly. Elementary schooling in the <i>maktab</i>, the <i>pāṭhśālā</i> and the <i>ṭol</i> was left to communities and teachers. Learning was rationed by birth, by sex and by descent. There was no golden age, and the entries in this part are a baseline, not an ideal.</p>`],
  company: ["The Company's quarrel", "1781–1854", "The Company's Quarrel: Medium Mistaken for Purpose", `
    <p>The Company first patronised learning on the Mughal model. Warren Hastings founded the Calcutta Madrasa in 1781 and Jonathan Duncan the Benares Sanskrit College in 1791, to train the Muslim and Hindu law officers the Company's courts needed. The Charter Act of 1813 then obliged the Company to spend a lakh of rupees a year on the revival of literature and the introduction of the sciences, without saying which literature or which language. The quarrel of the next twenty years was an argument about that sentence.</p>
    <p>The Orientalists wanted to work through the learned classes and their languages, grafting European science onto Sanskrit and Arabic. The Anglicists, drawing on Grant's evangelicals, Mill's utilitarians and Macaulay's Whig faith in progress, wanted European learning in English for a class that would carry it down. Important Indian voices, Rammohan Roy's above all, had asked for Western science before Macaulay arrived. Others petitioned to keep the old learning and its livelihoods. Bentinck decided for English in March 1835; Auckland restored some Oriental funding in 1839; Hardinge tied government employment to the new schooling in 1844.</p>
    <p>The pattern this part shows is that the famous quarrel was about medium and content, not ends. Both camps took the end for granted: the governance of India. The option that would have built on what people already spoke and learned, argued by William Adam and practised at the Delhi College and Roorkee, was left out of the frame and took decades to return.</p>`],
  crown: ["The examining machine", "1854–1947", "The Examining Machine: The Warrant Moves to the Board", `
    <p>Macaulay is the symbol of the colonial inheritance. Wood built it. The Despatch of 1854 created departments of public instruction, grants-in-aid and, decisively, universities on the London model that examined students they did not teach. Calcutta, Bombay and Madras were founded in 1857. Teaching colleges became clients of the examiner, and the warrant for learning passed from the teacher to the board.</p>
    <p>The board did not reject purposes. It had no place to put one. It certified competence in content and left the question of ends to the student, the family and the market. Every later commission saw a version of the problem. The Hunter Commission of 1882 turned attention to primary schooling and found the indigenous schools neglected. Curzon's Universities Act of 1904 tightened control. Sadler's commission of 1917 to 1919 attacked the affiliating university and recommended teaching universities instead. Sargent's plan of 1944 promised universal schooling in forty years.</p>
    <p>The alternatives this part records were real. Leitner's campaign for a teaching university in Lahore lost to the examining model in 1882. Dhaka was founded in 1921 as a unitary, teaching and residential university after Sadler. Both are tests of whether the form could survive the machine, and the answer after 1947 was mostly no.</p>`],
  response: ["The traditions answer", "1857–1920", "The Traditions Answer: A Split Instead of a Rebuilding", `
    <p>After 1857 the subcontinent's traditions answered the examining machine, and the answers divided. Deoband in 1866 and Aligarh in 1875 were both modern institutions, built in the same decade and province by men who knew each other. Deoband kept the religious sciences and the teacher's chain, ran on public subscription and examined its own students. Aligarh took the colonial university's form and tried to fill it with a Muslim gentleman's formation. Neither could name what it was doing in its own terms, so both accepted the language of progress and reaction and fought over sides. Nadwa, founded in 1894, was the attempt to rejoin them.</p>
    <p>Language became the second front. From the Benares petition of 1867 to MacDonnell's resolution of 1900, Hindi in Nagari and Urdu in Persian script turned into communities with claims on the courts and the schools. Girls entered the reform argument on its own terms, as household formation: Nazir Ahmad's novel of 1869 and Thānvī's <i>Bihishtī Zewar</i>. Rokeya Sakhawat Hossain in Bengal argued from wider grounds.</p>
    <p>Fazlur Rahman's objection sits over this whole part. If the madrasa had already narrowed to commentary on commentary before the British came, the split did not divide a living tradition; it divided one that had stopped arguing. The entries also hold the counter-witnesses. For Phule the old order was a wall, and the new schools a door.</p>`],
  purpose: ["The purpose experiments", "1901–1947", "The Purpose Experiments: Reached and Not Kept", `
    <p>Between 1901 and 1947 the subcontinent reached the question of purpose again and again. Tagore's school at Santiniketan, the Gurukul at Kangri, Jamia Millia in the non-cooperation year of 1920, Osmania's Urdu university and its translation bureau, Iqbal's critique of schooling as servility, Ambedkar's attack on caste, and above all the Wardha scheme of 1937 each named an end beyond the examination and built, or designed, an institution to serve it.</p>
    <p>Wardha is the hinge. Gandhi's diagnosis in <i>Hind Swaraj</i> became a design: seven years of free and compulsory schooling, in the mother tongue, taught through a productive craft and meant to pay for itself. The committee that drafted it put the purpose-experiments in one room, with Zakir Husain of Jamia in the chair, Saiyidain of Aligarh, and Aryanayakam and Asha Devi of Santiniketan. It was the most serious attempt in the atlas to offer a thick purpose to every child.</p>
    <p>None of these designs became the system. Osmania's Urdu medium ended after 1948. India adopted Basic Education and let it go. Pakistan canonised Iqbal and did not read him as a plan, and the Muslim League attacked Wardha as a Congress project. The part ends with the question the series carries into 1947: why purposes this serious did not reach the institutions, with the right people in office and the colonial ruler gone.</p>`],
  pakistan: ["Pakistan", "1947–now", "Pakistan: The Machine Kept, the Purpose in the Preamble", `
    <p>Pakistan's founding choices were made fast and made once: keep the examining university, expand it as the new state's instrument, and tie education to a single national language. The Karachi conference of 1947 named an Islamic and national purpose; the Language Movement of 1948 to 1952 answered the single language; the Sharif Commission of 1959 set out the list of reforms that every later policy would repeat.</p>
    <p>The purposes appear in the preambles: Islamic ideology, national cohesion, manpower. The one that reached the institution, the ideological one, arrived as examinable content. The state absorbed the endowments in 1959 and 1961, nationalised private schools in 1972, absorbed the madrasa through zakat and the <i>sanad</i>'s equivalence after 1979, and rebuilt the research university by decree in 2002, with a new metric on the same machine. It appointed Fazlur Rahman to supply the modern Islamic thinking its preambles invoked, and forced him out in 1968.</p>
    <p>The series' mechanism is tested here. Political competition rewards fast, visible, distributable goods, and the examining university was an ideal instrument: expandable, visible, rich in posts. Devolution in 2010 gave the elected tier the lever. The out-of-school children of the 2020s are the measure of what the machine did not reach.</p>`],
  neighbours: ["The neighbours", "1947–now", "The Neighbours: Same Inheritance, Other Choices", `
    <p>India and Bangladesh enter this atlas for three reasons only: as a test, where the same inheritance met a different choice; as a road not taken, which shows what Pakistan's choice was; or as the same pattern, which shows that a subcontinental habit is not Pakistan's alone. Malaysia enters as the one state in scope that wrote its philosophy of education down first.</p>
    <p>India kept the machine too. Its education minister from 1947 to 1958 was Abul Kalam Azad, one of its deepest religious thinkers, and his ministry built the University Grants Commission and the first IIT. It adopted Basic Education and let it go; the Kothari Commission replaced the craft with work experience. It answered the language question by negotiation, and the scope question by law in 2009. Bangladesh, founded on its mother tongue, wrote a secular national policy in 1974, nationalised its primary schools in 1973, and pulled ahead on girls' schooling through a stipend, donors and BRAC's schools.</p>
    <p>Malaysia is the warning. Its <i>Falsafah Pendidikan Kebangsaan</i> of 1988 states a thick purpose, and al-Attas's thought stands behind it. Forty years on, the purpose has been carried by the same machinery of state examination and credential, and the results are ordinary. A purpose enacted by that machinery is converted by it.</p>`]
};

window.MAPREAD = {
  purpose: `Before 1947 the colours are mixed: formation within a tradition in the Mughal order and the traditions' answers, reform and service under the Company and the Crown, the whole person in the purpose experiments. After 1947 nation, manpower and access take over, and measured learning appears only at the end, brought by the reform literature.`,
  medium: `The learner's own tongue is the most common answer that did not win. English dominates the upper levels from 1835 on, and national languages rise with the Urdu–Hindi controversy and after 1947.`,
  warrant: `The teacher holds the warrant in the Mughal order and in the traditions' own institutions. From 1854 the examining board takes it, and after 1947 the state, through equivalence and recognition. Only Wardha names the work itself.`,
  scope: `Designs that widen the door cluster in the last century: Phule, Rokeya, Ambedkar, Wardha, the Right to Education Act, the stipend. The thickest purposes sit mostly with the few.`,
  pays: `Patrons and endowments give way to the state, the missions and the community in the nineteenth century. After 1947 the state dominates, with households and donors returning in the last decades.`,
  fate: `Conversion is the commonest fate on both sides of 1947. Outright defeat belongs mostly to the alternatives: the Orientalists, Adam, Leitner, the Qudrat-e-Khuda report. The open cases cluster in the present.`
};

window.QUARRELS = `
  <p>The same few disagreements recur across two centuries, and knowing which one a document belongs to is often the quickest way to understand it.</p>
  <h3>Which learning, in which language</h3>
  <p>The Orientalists against the Anglicists (Prinsep against Macaulay, 1835), and both against the vernacularists they left out (Adam, the Delhi College, Roorkee). The same quarrel returns as Osmania's Urdu against the English university, as Pakistan's Urdu against Bengali (1948–52), as India's three-language formula, and as Malaysia's decision to teach science in English and then to stop.</p>
  <h3>Teaching or examining</h3>
  <p>Wood's examining university against the teaching university: Leitner against the Punjab University of 1882, Sadler and Dhaka against the affiliating model, Deoband's own examinations against the board's. The quarrel is about who holds the warrant.</p>
  <h3>Aligarh or Deoband</h3>
  <p>Sir Syed's college against the Dār al-ʿUlūm, with Nadwa's attempt to rejoin them and Akbar Allahabadi's verse mocking both. Behind it is Fazlur Rahman's question: did the split divide a living tradition or one that had already narrowed?</p>
  <h3>Urdu or Hindi</h3>
  <p>The Benares petition of 1867 against Urdu in the courts, the Hindi memorials to the Hunter Commission, MacDonnell's resolution of 1900 and the Urdu Defence Association. Wardha's Hindustani in either script was the last attempt to hold the two together through the school.</p>
  <h3>The craft or the credential</h3>
  <p>Wardha's school taught through a productive craft and meant to pay for itself; the credential paid more. Basic Education against the Kothari Commission's work experience, the takli against the <i>sanad</i>.</p>
  <h3>The state or the market</h3>
  <p>Bhutto's nationalisation of 1972 against the low-fee private schools that grew around the state, and the LEAPS finding that those schools taught more for less. Bangladesh adds a third party, the NGO.</p>
  <h3>One school or two</h3>
  <p>The madrasa and the modern school side by side, which Fazlur Rahman called two systems producing two classes; the 1979 equivalence that joined them on paper; and the series' own floor and ceiling, which risks the same dualism on class lines.</p>
  <h3>Purpose or measure</h3>
  <p>Preambles that name an ideology against roadmaps that count enrolment and test scores; the research purpose of 2002 that arrived as a count of papers. The quarrel is rarely stated, because each side speaks past the other.</p>
  <h3>Who may learn</h3>
  <p>Phule, Rokeya and Ambedkar against the orders that rationed learning by caste, descent and sex; the sharif household against the girl who would learn for herself; filtration against the Right to Education Act.</p>`;

window.UNANSWERED = `
  <p>How much of the purpose gap was internal before it was colonial. Fazlur Rahman dates the madrasa's narrowing to long before the British. If he is right, colonialism took away less than the atlas's thesis claims, and the split of Aligarh and Deoband divided a tradition that had already stopped arguing. The Dars-i Niẓāmī's rationalism at Farangī Maḥall cuts the other way.</p>
  <p>Whether Basic Education failed on its own design or under the pull of the credential. Self-support, the economics of the takli and the charge of child labour are reasons internal to the scheme; parents' demand for certificates and governments' demand for visible expansion are external. The evidence on what Basic schools achieved has not been read against both.</p>
  <p>Why Bangladesh diverged. The same institutions, the same state until 1971 and military rule from 1975 to 1990, and yet a lead on girls' schooling and child survival. Programmatic competition, aid dependence, NGO delivery, the stipend, elite fear of disorder and the rupture of 1971 are all candidates, and the atlas cannot yet separate them.</p>
  <p>Whether the medium can change without elite exit. Localising the medium for the many while the few keep English may deepen stratification rather than end it. Bangladesh, founded on its mother tongue, is the test, and the evidence on its English-medium growth is still to be gathered.</p>
  <p>Whether a stated purpose can survive the machinery that enacts it. Malaysia wrote its philosophy first and enacted it through examination and credential. Pakistan wrote its purposes into preambles and enacted them as syllabus. Neither shows what an institution built for a purpose would look like at national scale, and the atlas holds no case that does.</p>`;

window.ABOUT = `
  <p><b>What this atlas is.</b> A digital survey of the subcontinent's arguments about schooling from the Mughal order to the present, built as a companion to the <a href="https://aasem.github.io/edu-atlas/" target="_blank" rel="noopener">Atlas of Educational Philosophy</a> and to the essay series <i>Questioning the University in Pakistan</i>. The philosophy atlas reads the traditions through seven questions about the human being; this one reads the documents through six questions about institutions. Where a text appears in both, the entry links to the other reading.</p>
  <p><b>On selection.</b> The entries are the primary documents, institutions and episodes the series plan uses for its historical, political and comparative arcs, with the Orientalist–Anglicist debate set out in full. India, Bangladesh and Malaysia enter only where the series uses them as tests, roads not taken or the same pattern. <a href="#library">The Library</a> holds every source in the series plan, including the secondary literature and the purpose survey, so that the survey is complete even where an entry is not.</p>
  <p><b>On sources and verification.</b> Arguments are paraphrased rather than quoted. Dates, counts and attributions follow the standard histories, and each entry lists under <i>To verify</i> what should be checked against the primary document before it is cited. Counts from the advocacy era of the 1820s to the 1880s (the Madras surveys, Adam, Leitner) are given as ranges with their provenance. The classifications are interpretations, made to be contested in the readings.</p>
  <p><b>On the readings.</b> Each entry ends with an empty reading under the reader's name. The readings are the reader's own; none has been written for you.</p>
  <p class="colophon">Compiled by <a href="https://mechanomorph.substack.com" target="_blank" rel="noopener">Asim D. Bakhshi</a> with Claude, Anthropic's AI model. Each <i>Reading</i> belongs to the reader named above it.</p>
  <p>© 2026 <a href="https://mechanomorph.substack.com" target="_blank" rel="noopener">Asim D. Bakhshi</a>. Text and readings are licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">Creative Commons Attribution 4.0</a>; code under the MIT License. You may share and adapt this work with credit.</p>`;

// [word, original script, language, definition, lang attribute]
window.WORDS = [
  ["madad-i maʿāsh", "مدد معاش", "Persian", "A revenue grant for the maintenance of scholars, holy men and their families. The Mughal state's main instrument for rewarding learning.", "ur"],
  ["waqf", "وقف", "Arabic", "A charitable endowment, held in perpetuity, that could fund a madrasa, a mosque or a shrine. Dismantled in stages by colonial courts and Pakistani ordinances.", "ur"],
  ["ijāza", "اجازہ", "Arabic", "A teacher's licence to a pupil to transmit a text. The personal warrant of the old learning.", "ur"],
  ["sanad", "سند", "Arabic", "A certificate or warrant; in modern usage the credential, and the madrasa's diploma given equivalence by the state.", "ur"],
  ["munshī", "منشی", "Persian", "A secretary trained in Persian prose, letter-writing and accounts for the service of the state. Learning for service long before the Company.", "ur"],
  ["inshāʾ", "انشاء", "Arabic", "The art of composing letters and documents, the core of the munshī's training.", "ur"],
  ["akhlāq", "اخلاق", "Arabic", "Ethics, character; the literature of formation, of which Ṭūsī's Akhlāq-i Nāṣirī was the most read in Mughal India.", "ur"],
  ["Dars-i Niẓāmī", "درس نظامی", "Persian", "The madrasa curriculum associated with Mullā Niẓām al-Dīn of Farangī Maḥall, rationalist at its origin and later the standard madrasa syllabus of South Asia.", "ur"],
  ["maʿqūlāt and manqūlāt", "معقولات و منقولات", "Arabic", "The rational sciences (logic, philosophy, mathematics) and the transmitted sciences (Quran, hadith, law).", "ur"],
  ["maktab", "مکتب", "Arabic", "An elementary school, usually teaching the Quran, reading and some arithmetic, kept by a teacher for a neighbourhood.", "ur"],
  ["pāṭhśālā", "पाठशाला", "Sanskrit", "A village school, often teaching reading, writing and accounts in the local language.", "hi"],
  ["ṭol", "টোল", "Bengali", "A school of Sanskrit learning in Bengal, kept by a pandit for advanced pupils.", "bn"],
  ["ashrāf and ajlāf", "اشراف و اجلاف", "Arabic", "The well-born and the common: the hierarchy of descent that narrowed the scope of Muslim learning in South Asia.", "ur"],
  ["sharīf", "شریف", "Arabic", "Respectable, well-born. The sharif household was the setting and the limit of girls' education in the Muslim reform argument.", "ur"],
  ["chanda", "چندہ", "Persian", "Subscription. Deoband's founders funded the school by public subscription rather than state grant.", "ur"],
  ["Orientalist", "", "English", "In the 1830s, an official who wanted the Company's education funds spent through Sanskrit, Arabic and Persian learning, with European science grafted on.", ""],
  ["Anglicist", "", "English", "In the 1830s, an official who wanted the funds spent on European literature and science taught in English.", ""],
  ["vernacularist", "", "English", "One who argued for education in the languages people spoke, the position neither camp of 1835 took. William Adam and Brian Hodgson are the usual examples.", ""],
  ["downward filtration", "", "English", "The theory that educating a class in European learning would spread that learning to the masses through the class's own efforts in the vernaculars.", ""],
  ["grant-in-aid", "", "English", "Wood's system of public grants to schools built and run by others, missions and communities above all, on condition of inspection.", ""],
  ["affiliating university", "", "English", "A university that examined and certified students taught in colleges attached to it, on the model of London University. The form of 1857.", ""],
  ["Hindustani", "ہندوستانی · हिंदुस्तानी", "Urdu and Hindi", "The common spoken language of north India, written in either the Persian or the Nagari script. Wardha proposed it as the link language of the school.", ""],
  ["Nāgarī", "नागरी", "Hindi", "The Devanagari script, whose admission to the courts of the North-Western Provinces in 1900 crowned the Hindi movement.", "hi"],
  ["Nai Talīm", "नई तालीम · نئی تعلیم", "Hindustani", "New Education: Gandhi's name for basic education through a productive craft, adopted at Wardha in 1937.", ""],
  ["takli", "तकली", "Hindi", "The hand spindle, Wardha's emblematic craft, through which spinning, arithmetic, history and the economy of cotton were all to be taught.", "hi"],
  ["Dār al-Tarjuma", "دار الترجمہ", "Arabic", "The translation bureau founded in Hyderabad in 1917 to supply Osmania University with textbooks in Urdu.", "ur"],
  ["khudī", "خودی", "Persian", "Selfhood; Iqbal's word for the self strengthened through striving and love, and the end of education in his thought.", "ur"],
  ["ʿilm and ʿamal", "علم و عمل", "Arabic", "Knowledge and action. The Quranic demand that knowledge issue in practice.", "ur"],
  ["Qawmi madrasa", "কওমি মাদ্রাসা", "Bengali", "In Bangladesh, the independent madrasas outside state regulation, distinct from the state-regulated Alia madrasas.", "bn"],
  ["Dawra-i Ḥadīth", "دورۂ حدیث", "Arabic", "The final course of hadith study in the madrasa curriculum, whose diploma Bangladesh made equivalent to a master's degree.", "ur"],
  ["equivalence", "", "English", "The state's declaration that a madrasa sanad counts as a university degree, made in Pakistan after 1979 and in Bangladesh in 2018.", ""],
  ["Article 25-A", "", "English", "The article of Pakistan's constitution, added in 2010, that makes free and compulsory education for children aged five to sixteen a right.", ""],
  ["ALP", "", "English", "Alternative Learning Pathway: compressed, flexible schooling for over-age children who never enrolled or dropped out.", ""],
  ["TaRL", "", "English", "Teaching at the Right Level: grouping children by what they can do rather than by grade, from Pratham's work in India.", ""],
  ["PPSMI", "", "Malay", "Pengajaran dan Pembelajaran Sains dan Matematik dalam Bahasa Inggeris: Malaysia's policy of teaching science and mathematics in English, from 2003, reversed from 2012.", ""],
  ["Falsafah Pendidikan Kebangsaan", "", "Malay", "Malaysia's National Philosophy of Education, issued in 1988: the holistic development of balanced individuals grounded in belief in God.", ""]
];

// Names linked to an encyclopedia search the first time they appear on a page: [as written, search term].
window.TERMS = [
  ["Warren Hastings","Warren Hastings"],["Hastings","Warren Hastings"],["Jonathan Duncan","Jonathan Duncan (governor)"],["William Jones","William Jones (philologist)"],
  ["Horace Hayman Wilson","Horace Hayman Wilson"],["H.H. Wilson","Horace Hayman Wilson"],["Henry Thoby Prinsep","Henry Thoby Prinsep"],["Prinsep","Henry Thoby Prinsep"],
  ["Charles Grant","Charles Grant (British politician, born 1746)"],["James Mill","James Mill"],["Rammohan Roy","Ram Mohan Roy"],["David Hare","David Hare (philanthropist)"],
  ["Radhakanta Deb","Radhakanta Deb"],["Thomas Munro","Sir Thomas Munro, 1st Baronet"],["Munro","Sir Thomas Munro, 1st Baronet"],["Alexander Duff","Alexander Duff (missionary)"],
  ["Macaulay","Thomas Babington Macaulay"],["Bentinck","Lord William Bentinck"],["Charles Trevelyan","Sir Charles Trevelyan, 1st Baronet"],["Trevelyan","Sir Charles Trevelyan, 1st Baronet"],
  ["Auckland","George Eden, 1st Earl of Auckland"],["Hardinge","Henry Hardinge, 1st Viscount Hardinge"],["William Adam","William Adam (missionary)"],["Brian Hodgson","Brian Houghton Hodgson"],
  ["Master Ramchandra","Master Ramchandra"],["James Thomason","James Thomason"],["Charles Wood","Charles Wood, 1st Viscount Halifax"],["Leitner","Gottlieb Wilhelm Leitner"],
  ["W.W. Hunter","William Wilson Hunter"],["Curzon","George Curzon, 1st Marquess Curzon of Kedleston"],["Michael Sadler","Michael Ernest Sadler"],["Sadler","Michael Ernest Sadler"],["John Sargent","John Sargent (educationist)"],
  ["Sir Syed","Syed Ahmad Khan"],["Mohsin-ul-Mulk","Mohsin-ul-Mulk"],["Nazir Ahmad","Nazir Ahmad Dehlvi"],["Ashraf Ali Thanvi","Ashraf Ali Thanwi"],["Thānvī","Ashraf Ali Thanwi"],
  ["Shibli","Shibli Nomani"],["Akbar Allahabadi","Akbar Allahabadi"],["Jotirao Phule","Jyotirao Phule"],["Phule","Jyotirao Phule"],["Savitribai","Savitribai Phule"],
  ["Rokeya Sakhawat Hossain","Begum Rokeya"],["Rokeya","Begum Rokeya"],["Tagore","Rabindranath Tagore"],["Gandhi","Mahatma Gandhi"],["Zakir Husain","Zakir Husain (politician)"],
  ["Saiyidain","Khwaja Ghulam Saiyidain"],["Iqbal","Muhammad Iqbal"],["Ambedkar","B. R. Ambedkar"],["Azad","Abul Kalam Azad"],["Fazlur Rahman","Fazlur Rahman Malik"],
  ["al-Attas","Syed Muhammad Naquib al-Attas"],["Qudrat-e-Khuda","Muhammad Qudrat-i-Khuda"],["Kothari","Daulat Singh Kothari"],["Jinnah","Muhammad Ali Jinnah"],
  ["Qasim Nanautvi","Muhammad Qasim Nanautavi"],["Rashid Ahmad Gangohi","Rashid Ahmad Gangohi"],["Shraddhanand","Swami Shraddhanand"],["Mulla Nizamuddin","Mulla Nizamuddin Sihalvi"],
  ["Abu'l Fazl","Abu'l-Fazl ibn Mubarak"],["Fathullah Shirazi","Fathullah Shirazi"],["Chandar Bhan Brahman","Chandar Bhan Brahman"],["Ṭūsī","Nasir al-Din al-Tusi"],
  ["Abdul Razak","Abdul Razak Hussein"],["Anwar Ibrahim","Anwar Ibrahim"],["Fazle Hasan Abed","Fazle Hasan Abed"],["Atta-ur-Rahman","Atta-ur-Rahman (chemist)"],
  ["Pervez Hoodbhoy","Pervez Hoodbhoy"],["Zia","Muhammad Zia-ul-Haq"],["Bhutto","Zulfikar Ali Bhutto"],["Ayub","Ayub Khan"],["Nur Khan","Nur Khan"],["Aryanayakam","E. W. Aryanayakam"],
  ["Vinoba","Vinoba Bhave"],["J.C. Kumarappa","J. C. Kumarappa"],["Mashruwala","Kishorelal Mashruwala"],["Michael Barber","Michael Barber (educationalist)"]
];

