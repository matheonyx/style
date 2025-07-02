document.addEventListener("DOMContentLoaded", function() {
  const searchBtn = document.getElementById("searchBtn");
  const champRecherche = document.getElementById("champRecherche");
  const fondNoir = document.getElementById("fondNoir");
  const resultatRecherche = document.getElementById("resultatRecherche");
  // Tableau de films (les répétitions de "Angry Birds" sont incluses si besoin)
  const films = [
    {
          title: "Angry Birds",
          href: "https://magnetic-lowly-sodalite.glitch.me/Angry%20Birds.html",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/gris%200f0f0f.png?v=1731766678615"
        },
        {
          title: "Avengers Marvel",
          href: "https://matheonyx.github.io/Nesdy/avengers.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3244A585F6BA64DC3204BF43D7422DC53849873C5635E660521ED37E8CE3CCC0/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Avengers: L'ère d'Ultron Marvel",
          href: "https://matheonyx.github.io/Nesdy/avengers%20l'%C3%A8re%20d'ultron.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B828B85D669F0F3ECFE14931F45CE6C14039F276E19BFA85C9B96A5D027E4C7B/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Avengers: Endgame Marvel",
          href: "https://matheonyx.github.io/Nesdy/avengers%20endgame",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB176BD1488D7E4822256EF1778C124FC17388FC1E7F0F6D89B38AFF5FB001F6/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Avengers: Infinity War Marvel",
          href: "https://matheonyx.github.io/Nesdy/avengers%20infinity%20war",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/Design%20sans%20titre%20(76).png?v=1722623228467"
        },
        {
          title: "Ant-Man Marvel",
          href: "https://magnetic-lowly-sodalite.glitch.me/Ant-man.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/UJu_lhL8209P6Wg-FXptOQ/738x416.webp"
        },
        {
          title: "Ant-Man 2 Marvel",
          href: "https://example.com/antman2",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video113/v4/80/79/c5/8079c5d8-2896-797c-6d2f-4e82904ac2fa/1405923580-WW-AMP_SF.lsr/738x416.webp"
        },
        {
          title: "Ant-Man 3 Marvel",
          href: "https://magnetic-lowly-sodalite.glitch.me/ant-man%20and%20the%20wasp%20quantumania.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/e8/1a/4f/e81a4fc3-b859-2dcf-3a02-690c1161ab67/contsched.ymahepot.lsr/738x416.webp"
        },
        {
          title: "Alien",
          href: "https://matheonyx.github.io/Nesdy/aliens%20le%20huiti%C3%A8me%20passager.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video123/v4/41/bd/d5/41bdd59e-9967-e988-3ca9-b885fb7035c2/pr_source.lsr/738x416.webp"
        },
        {
          title: "Alien Covenant",
          href: "https://matheonyx.github.io/Nesdy/Alien%20Covenant",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video123/v4/24/01/40/240140fb-5363-cef1-8d71-613f523c434d/Alien_Covenant_CoverArt_3840x2160.lsr/738x416.webp"
        },
        {
          title: "Alien Romulus",
          href: "https://matheonyx.github.io/Nesdy/Alien%20Romulus",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/alien%20romuluss.png?v=1724606638813"
        },
        {
          title: "Alien Resurrection",
          href: "https://matheonyx.github.io/Nesdy/alien%20resurection.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video123/v4/60/45/5a/60455a9f-af14-797d-e1d6-e6c7424ea64d/AlienResurrection_CoverArt_3840x2160.lsr/738x416.webp"
        },
        {
          title: "Animaux Fantastiques",
          href: "https://magnetic-lowly-sodalite.glitch.me/les%20animaux%20fantastiques.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/8a/dc/5a/8adc5a0b-a8a8-c09d-d638-6ada98e5024f/pr_source.lsr/738x416.webp"
        },
        {
          title: "Alien vs Predators Requiem",
          href: "https://magnetic-lowly-sodalite.glitch.me/alien%20vs%20predators%20requiem.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/bP0BxjWLTZMnx7d7tBo6yg/738x416.webp"
        },
        {
          title: "Alien 3",
          href: "https://magnetic-lowly-sodalite.glitch.me/alien3.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/M2w2CAoTfSWrNE63EYY-Vw/738x416.webp"
        },
        {
          title: "Alien vs Predators",
          href: "https://example.com/alien-3",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/xtvo_XoF58jEvfce6jHfIQ/738x416.webp"
        },
        {
          title: "Aladdin Disney",
          href: "https://matheonyx.github.io/Nesdy/Aladdin",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/alladin.png?v=1735930538337"
        },
        {
          title: "A Quiet Place Day One",
          href: "https://example.com/alien-3",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/9a/bd/4a/9abd4a6c-66f6-736b-d53c-403677e5fa2d/804f4b6c-788e-4053-954c-3b74b3ad2fe4_AQuietPlaceDay1_EN_3840x2160.lsr/738x416.webp"
        },
        {
          title: "Dune 2",
          href: "https://matheonyx.github.io/Nesdy/dune%202",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/c9/a1/ec/c9a1ec4e-6829-4a98-12da-accd1e648cb2/464e85e7-c33f-4974-a417-d300fb13341c_DUNE_PART2_STD_APO_H_DD_KA_TT_CVRART_3840x2160_300dpi_FR-p3.lsr/738x416.webp"
        },
        {
          title: "Astérix et le domaine des dieux",
          href: "https://example.com/alien-3",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/b7c2c30692c23e905bf5aa00f01d1b03a688a33d2523f509e978e5719e146f1b.jpg"
        },
        {
          title: "Astérix et Obélix: l'empire du milieu",
          href: "https://example.com/alien-3",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/9894b270bb4ddb5bb62e1865c9536780b58cd1f6b89d8d4a753f3345111c8473.jpg"
        },
        {
          title: "Avatar",
          href: "https://matheonyx.github.io/Nesdy/avatar",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/08/e1/78/08e17806-7489-5444-c97d-ed4e1c9f1130/FOX_AVATAR_TH_FR_WW_ARTWORK_FR-FR_3840x2160_3T16AQ000004O4.lsr/738x416.webp"
        },
        {
          title: "Avatar: The Way of Water Avatar 2",
          href: "https://matheonyx.github.io/Nesdy/avatar%202",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/8b/09/94/8b09946b-28fd-7f9a-c3ce-125fc3b42609/FOX_AVATAR_TWOW_TH_FR_ITUNES_CH_LU_BE_FR_ARTWORK_FR-FR_3840x2160_3Q03R500000GTZ.lsr/738x416.webp"
        },
        {
          title: "Avatar The Last Air Blender",
          href: "https://example.com/alien-3",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/avatar%20the%20last%20airbender.png?v=1724670499819"
        },
        {
          title: "Astérix et le Secret de la Potion Magique",
          href: "https://example.com/alien-3",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/c534d6d13843862a793695e046fef0e6247d550fb0181a934bed0e460c6adbd6.jpg"
        },
        // Films commençant par D
        {
          title: "Docteur Doctor Strange Marvel",
          href: "https://matheonyx.github.io/Nesdy/doctor%20strange.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video124/v4/9d/de/bb/9ddebb25-d1e3-b16d-9262-ac320f1a5b87/DIS_DOCTOR_WW_ARTWORK_EN-US_3840x2160_1MNZCS000000CI.lsr/738x416.webp"
        },
        {
          title: "Docteur Doctor Strange 2 Marvel",
          href: "https://matheonyx.github.io/Nesdy/doctor%20strange%20in%20the%20multiverse%20of%20madness",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/doctor%20strange%202.png?v=1731766676306"
        },
        {
          title: "Dragons Dreamworks",
          href: "https://matheonyx.github.io/Nesdy/dragons.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video113/v4/da/b5/66/dab566e8-e709-f294-d53d-c1ebbe19c127/UNI_HOW_TO_TRAIN_YOUR_DRAGON_FRP_FR_ARTWORK_FR-FR_3840x2160_1JRTHG000005NE.lsr/738x416.webp"
        },
        {
          title: "Dragons 2 Dreamworks",
          href: "https://matheonyx.github.io/Nesdy/dragon%202",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/dragons%202.png?v=1724610783186"
        },
        {
          title: "Dragons 3 Dreamworks",
          href: "https://matheonyx.github.io/Nesdy/Dragon%203",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video113/v4/66/5e/a2/665ea2c0-5199-bbf4-9d6e-fb517ade2eec/10A86_FR_HowToTrainYourDragon_TheHiddenWorld_3840x2160.lsr/738x416.webp"
        },
        {
          title: "Walt Disney",
          href: "https://matheonyx.github.io/Nesdy/Walt%20Disney%20Page",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6325B69DA9F443F25EAE6C90ADEA67B0BB3A8B061D0505290A40FF1A50942E2A/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Donjons et Dragons : L'Honneur des voleurs",
          href: "https://matheonyx.github.io/Nesdy/donjons%20et%20dragons.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/4d/4f/c6/4d4fc63f-dd5e-0051-bc5e-18180265f431/pr_source.jpg/738x416.webp"
        },
        {
          title: "Dune",
          href: "https://matheonyx.github.io/Nesdy/Dune",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/dune.png?v=1726687592433"
        },
        {
          title: "Deadpool Marvel",
          href: "https://matheonyx.github.io/Nesdy/Deadpooll",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/Deadpool.png?v=1723658530622"
        },
        {
          title: "Deadpool 2 Marvel",
          href: "https://matheonyx.github.io/Nesdy/Deadpool%202",
          imgSrc: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7412/297412-h"
        },
        {
          title: "Deadpool 3 Marvel",
          href: "https://matheonyx.github.io/Nesdy/deadpool3",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/deadpool3.png?v=1727810276123"
        },
        {
          title: "Dune : Prophecy",
          href: "https://magnetic-lowly-sodalite.glitch.me/dune%20prophecy.html",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/dune%20prophecy.png?v=1732046685994"
        },
        {
          title: "Dinosaure Disney",
          href: "https://matheonyx.github.io/Nesdy/Dinosaures.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3F389784F92C91B739CE20B9EBC4991DAF8B7380DC390D8BFEF6B3E6207FA61F/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Dumbo Disney",
          href: "https://matheonyx.github.io/Nesdy/dumbo",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9DFE8402A510E146639C256242A45C0FBFA2176C373CD3BCB24716F8E94BF26C/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Dream Productions Pixar Disney",
          href: "https://matheonyx.github.io/Nesdy/dream%20productions.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/99A284CFAF0E12A041DCD232D77A8B68D3F9BAC7A905C15FE7A983110F089DCA/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Dingo Disney",
          href: "https://matheonyx.github.io/Nesdy/the%20olympic%20champ.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BC7C807763060B471423E1BAC84D812D0F266CCA10F94AA15D216B655C5012CB/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        // Films commençant par H
        {
          title: "Harry Potter 1",
          href: "https://matheonyx.github.io/Nesdy/Harry%20Potter.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/82/ea/72/82ea721f-3ae4-d1e8-a510-7761fd4c9cde/7ff8ac37-d0e0-49a7-8d6d-19fe46401d45_HP1_PhilosophersStone_2022Drafting_BeastLL_H_DD_KA_TT_CVRART_3840x2160_300dpi_FR-p3.lsr/738x416.webp"
        },
        {
          title: "Harry Potter 2",
          href: "https://matheonyx.github.io/Nesdy/harry%20potter%202.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/26/06/4d/26064d7e-a91c-3174-5078-c74a7c6b6067/6ed314db-81f5-49e4-820d-c7bbf02083a0_HP2_ChamberofSecrets_2022Drafting_BeastLL_H_DD_KA_TT_CVRART_3840x2160_300dpi_FR-p3.lsr/738x416.webp"
        },
        {
          title: "Harry Potter 3",
          href: "https://matheonyx.github.io/Nesdy/harry%20potter3.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/9d/11/8c/9d118cc4-8e2b-9490-ce46-051e3dd8a51f/3ad222dd-07dc-4add-9ba9-4181fc92fa58_HP3_PrisonerofAzkaban_2022Drafting_BeastLL_H_DD_KA_TT_CVRART_3840x2160_300dpi_FR-p3.lsr/738x416.webp"
        },
        {
          title: "Harry Potter 4",
          href: "https://matheonyx.github.io/Nesdy/harry%20potter4.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/bb/e7/c7/bbe7c78b-1941-5c0d-cabb-ae7623377043/c755c978-2fb4-4ae9-8e32-eacbeea23ef4_HP4_GobletofFire_2022Drafting_BeastLL_H_DD_KA_TT_CVRART_3840x2160_300dpi_FR-p3.lsr/738x416.webp"
        },
        {
          title: "Harry Potter 5",
          href: "https://matheonyx.github.io/Nesdy/harry%20potter%205.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/00/31/fd/0031fdfd-c558-b529-de62-39b6beeb6ca1/cb8c9a73-8fee-4b2d-878d-ca6155c739e5_HP5_OrderofthePhoenix_2022Drafting_BeastLL_H_DD_KA_TT_CVRART_3840x2160_300dpi_FR-p3.lsr/738x416.webp"
        },
        {
          title: "Harry Potter 6",
          href: "https://matheonyx.github.io/Nesdy/harry%20potter%206.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/ec/7c/ae/ec7cae3a-a29c-dba2-3eb1-56f07deeb631/21eaec97-3b39-46e4-8d66-6c5ddf3c3868_HP6_HalfBloodPrince_2022Drafting_BeastLL_H_DD_KA_TT_CVRART_3840x2160_300dpi_FR-p3.lsr/738x416.webp"
        },
        {
          title: "Harry Potter 7",
          href: "https://matheonyx.github.io/Nesdy/harry%20potter%207.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/2f/b7/45/2fb745e1-c643-88e1-2d35-d659c9a8bd67/cd949987-f11d-462e-a869-d2acd1d28c4d_HP7_DeathlyHallows_Part1_2022Drafting_BeastLL_H_DD_KA_TT_CVRART_3840x2160_300dpi_FR-p3.lsr/738x416.webp"
        },
        {
          title: "Harry Potter 7 part 2",
          href: "https://matheonyx.github.io/Nesdy/harry%20potter%208.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/53/2f/6c/532f6c15-055b-262d-a52d-88faa7b6eac1/537b9a90-7435-4e36-b12f-59865c6cfec7_HP7_DeathlyHallows_Part2_2022Drafting_BeastLL_H_DD_KA_TT_CVRART_3840x2160_300dpi_FR-p3.lsr/738x416.webp"
        },
        {
          title: "Horizon an american saga",
          href: "https://matheonyx.github.io/Nesdy/horizon%20an%20american%20saga.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/d4ef64e69392ccde9ee53c7aa48f100f05b1f227fee0b4151b7cc64d21259772.jpg"
        },
        {
          title: "Hot Frosty",
          href: "https://matheonyx.github.io/Nesdy/hot%20frosty.html",
          imgSrc: "https://cdn.glitch.global/b5e38bca-811c-495c-aa28-c13540ae7e7b/Design%20sans%20titre.png?v=1732094563958"
        },
        {
          title: "Harold et le Crayon Magique",
          href: "https://matheonyx.github.io/Nesdy/harold%20et%20le%20crayon%20magique.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/7295c3c34836d7cbdc6def66790e4b856690bd8dc0a15c35360ed6ee34ae84d5.jpg"
        },
        {
          title: "Hulk Marvel",
          href: "https://matheonyx.github.io/Nesdy/Hulk.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A6CC9A2581AE4D71C319B17BF2BB6FEEE578172DD118A6011E50FFCDE9F1FF26/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        // Films commençant par L
        {
          title: "Le Roi Lion 1994 Mufasa Disney",
          href: "hhttps://matheonyx.github.io/Nesdy/The%20Lion%20King%201994.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video123/v4/06/c7/76/06c77670-a5d2-5925-4c33-1e514cb3f4a8/DIS_THE_LION_KING_FR_ARTWORK_FR-FR_3840x2160_1O4QKK0000014V.lsr/738x416.webp"
        },
        {
          title: "Le Roi Lion 2 Mufasa Disney",
          href: "https://matheonyx.github.io/Nesdy/Le%20roi%20Lion%202.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2DC8975601DFC2C2FC31419EEB47F474A75BC6A3941419BEB87530474CBD21F8/scale?width=600&aspectRatio=1.78&format=webp"
        },
        {
          title: "Frozen La Reine des Neiges Disney",
          href: "https://matheonyx.github.io/Nesdy/frozen",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video113/v4/59/df/e4/59dfe435-533c-123e-c142-1412d693ebe9/pr_source.lsr/738x416.webp"
        },
        {
          title: "Frozen 2 La Reine des Neiges Disney",
          href: "https://matheonyx.github.io/Nesdy/frozen%20II",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/frozen%202.png?v=1732396291311"
        },
        {
          title: "L'Age de Glace",
          href: "https://matheonyx.github.io/Nesdy/L'age%20de%20glace.html",
          imgSrc: "https://cdn.glitch.global/aba06776-3d00-4213-9643-021321905a51/Design%20sans%20titre.png?v=1746874404914"
        },
        {
          title: "L'Age de Glace 2",
          href: "https://matheonyx.github.io/Nesdy/l'age%20de%20glace%202.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/1svWKFIHvWf9YOJ4zGJRcg/738x416.webp"
        },
        {
          title: "L'Age de Glace 3",
          href: "https://matheonyx.github.io/Nesdy/l'age%20de%20glace%203",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/ivCIqZuht-pZsGMiKU_i4A/738x416.webp"
        },
        {
          title: "L'Age de Glace 4",
          href: "https://matheonyx.github.io/Nesdy/l'age%20de%20glace%204.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/9Ekw6XAaKScFj2DEDmLBcQ/738x416.webp"
        },
        {
          title: "L'Age de Glace 5",
          href: "https://matheonyx.github.io/Nesdy/l'age%20de%20glace%205.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/75/ac/35/75ac35b1-7fce-4552-81ff-6fc85776c8a0/1128022525-WW-AMP_SF.lsr/738x416.webp"
        },
        {
          title: "Ice Age: Scrat Tails",
          href: "https://matheonyx.github.io/Nesdy/ice%20age%20of%20buck%20wild.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52AA61B091FDCBA99E0FED43D235C63725E7A1855B4A747CB53CAC80A0CC298C/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Les Profs",
          href: "https://example.com/frozen2",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video122/v4/7c/b1/12/7cb112a3-50a9-dd00-9505-2cdafd53bdba/pr_source.jpg/738x416.webp"
        },
        {
          title: "Les Profs 2",
          href: "https://example.com/frozen2",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video122/v4/73/1d/b9/731db9ae-794d-1faf-a504-a261827b0ecf/pr_source.jpg/738x416.webp"
        },
        {
          title: "Little Mermaid Disney",
          href: "https://matheonyx.github.io/Nesdy/The%20Little%20Mermaid.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/f8/1f/16/f81f16f8-a55e-1db8-5b03-c6de24b75c11/DIS_LITTLE_MERMAID_ITUNES_ARTWORK_WW_ARTWORK_EN_3840x2160_3U5EKX0000051N-R1.lsr/738x416.webp"
        },
        {
          title: "Le Grinch Illumination",
          href: "https://matheonyx.github.io/Nesdy/Le%20Grinch.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/e3/be/12/e3be12ab-78a5-d8d5-1187-fa9b333d079e/1442083159-WW-AMP_SF.lsr/738x416.webp"
        },
        {
          title: "Le Grinch",
          href: "https://matheonyx.github.io/Nesdy/How%20the%20Grinch%20stole%20Christmas.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/plAp7AUD38AbpjE6sDrDwQ/738x416.webp"
        },
        {
          title: "Les Indestructibles Disney Pixar",
          href: "https://matheonyx.github.io/Nesdy/les%20indestructibles.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/58F02386239ABDFEACFC27D5E3B2CDB62FD412246C53A0E7BD414761E2EC1962/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Les Indestructibles 2 Disney Pixar",
          href: "https://matheonyx.github.io/Nesdy/Les%20indestructibles%202",
          imgSrc: "https://actu.6play.fr/wp-content/uploads/2023/12/les-indestructibles-2-film-M6.jpg"
        },
        {
          title: "Le Retour de la Momie",
          href: "https://matheonyx.github.io/Nesdy/le%20retour%20de%20la%20momie.html",
          imgSrc: "https://cdn.glitch.global/b5e38bca-811c-495c-aa28-c13540ae7e7b/Design%20sans%20titre%20(1).png?v=1732095347932"
        },
        {
          title: "Le Voyage d'Arlo Disney Pixar",
          href: "https://matheonyx.github.io/Nesdy/le%20voyage%20d'arlo.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/45920AB8F04BE00AC885794A960F24AC1FEAF5A17AFF336B1C90A2CE02B5EC53/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Le Monde de Nemo Disney",
          href: "https://matheonyx.github.io/Nesdy/Le%20Monde%20de%20Nemo.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EA4A2F9242425E8245162655BD5A1558F6A3BF1DBCB106AD214620A48B6DA9EF/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Le Monde de Dory Disney",
          href: "https://matheonyx.github.io/Nesdy/le%20monde%20de%20dory.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9CEB36F7C2D9573439B297E2B7D5781C4C3EE48E25B857922E4286CC4E059B26/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Là-haut Disney Pixar",
          href: "https://matheonyx.github.io/Nesdy/la-haut.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2B8842A711E8FC7318DD0E252EFE95639151C9C27C20E4BB69CF1E05090C6108/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Luca Disney Pixar",
          href: "https://matheonyx.github.io/Nesdy/luca.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/18EBF004584F885BCA876B525C693464A6E810817D9189FD77C1B1C190F82AD2/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "La Princesse et la Grenouille Disney",
          href: "https://matheonyx.github.io/Nesdy/La%20Princesse%20et%20la%20grenouille.html",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/La%20princesse%20et%20la%20grenouille.png?v=1724146003153"
        },
        {
          title: "Le Noel de Disney",
          href: "https://matheonyx.github.io/Nesdy/Le%20Noel%20de%20Disney.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E5D0E16F057CF3308DC54EC26A35D2828FBB8B3C36C6F04E044327C5848ADD02/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Lilo et Stitch Disney",
          href: "https://matheonyx.github.io/Nesdy/lilo%20et%20stitch.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/54C600FA3BA338DF3AC1860806791A4798E441B13F7030E45265B00290F8E549/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "La Belle et le Clochard Disney",
          href: "https://matheonyx.github.io/Nesdy/La%20Belle%20et%20le%20Clochard.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/05CA6860AB0CA0B3323896BC3BD325FC7D7BB9F1C78283A35EABFC564AA0E3FC/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "La Belle et le Clochard Disney",
          href: "https://matheonyx.github.io/Nesdy/Lady's%20and%20the%20Tramp.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Eob_rdC4EC40BKhLeH0A2g/738x416.webp"
        },
        {
          title: "Les Aristochats Disney",
          href: "https://matheonyx.github.io/Nesdy/les%20aristochats.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A8464B2ACFE680B4F1663BA545501B7133B67789034363EC88396BED28F63ED6/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "La Belle au bois dormant Disney",
          href: "https://matheonyx.github.io/Nesdy/la%20belle%20au%20bois%20dormant.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/96D5E72467DA66DEC9FB632F41F8310673D951C4FDDBEC31E4AC8001F5070B4D/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Le Livre de la Jungle Disney",
          href: "https://matheonyx.github.io/Nesdy/le%20livre%20de%20la%20jungle.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F1BC026C21D7C9F002B8FA36345C7CD1B1B4B768588AE934B08ED6E50177A410/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Le Livre de la Jungle Disney",
          href: "https://matheonyx.github.io/Nesdy/le%20livre%20de%20la%20jungled.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/78D8F004F759DDDA86B4F63318EC8787D86583A0779F93D6A5EE51520EB60255/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "La Belle et la Bete Disney",
          href: "https://matheonyx.github.io/Nesdy/la%20belle%20et%20la%20beted.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A551D1E66E584EA6085E2B8411970A72CC217B11AA109AA0D2304CCF1CDE3F12/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "L'anniversaire de Mickey Disney",
          href: "https://matheonyx.github.io/Nesdy/mickey%20birthday%20party.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F61CC1EF49ADAD9FB35017E97D60F3DA65DF109F144D6EC207B5CF200F088739/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Le Cinquième élément",
          href: "https://matheonyx.github.io/Nesdy/le%20cinquieme%20element.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/8cebbdb07ec4d18aaba4b4933a7f3815adaf405a467326031deec7ade745d82d.jpg"
        },
        {
          title: "Les 4 Fantastiques Marvel",
          href: "https://matheonyx.github.io/Nesdy/les%204%20fantastiques.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9A485CF3626B9A6D54E037ED61A745FC8C67614BBC7B842F441AF176698F2176/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Mad Max Fury of Road",
          href: "https://matheonyx.github.io/Nesdy/Mad%20Max%20Fury%20of%20Road.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/6p4d1M6t2DAOWLgrV6wb4g/738x416.webp"
        },
        {
          title: "Madagascar Dreamworks",
          href: "https://matheonyx.github.io/Nesdy/Madagascar.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/85/a8/f8/85a8f8fc-122e-7209-6325-d46148ee562c/2e7d6ebe-3ff8-46ef-95aa-65f8549d08d8_Madagascar_3840x2160_intl_eng_keyart_full_digital_artwork_RGB_V1_sprk.lsr/738x416.webp"
        },
        {
          title: "Madagascar 2 Dreamworks",
          href: "https://example.com/madagascar2",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/d6X-TkWHVlYPrlRAYXHAgQ/738x416.webp"
        },
        {
          title: "Madagascar 3 Dreamworks",
          href: "madagascar 3.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/8z8cz4--lK2dds06wWESsQ/738x416.webp"
        },
        {
          title: "Les Minions moi moche Illumination",
          href: "https://matheonyx.github.io/Nesdy/les%20minions.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/fn9Dlm4KYaVJkHP_1ns8PQ/738x416.webp"
        },
        {
          title: "Les Minion 2 moi moche Illumination",
          href: "https://matheonyx.github.io/Nesdy/Minions%20Rise%20of%20Gru.html",
          imgSrc: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXnD0gL2zz1gpjks92TMeC3lk8-4ztbdEmygcPA59wQ25DQTO300OSVdivtooVHt5aKx4RxZRxpxUq1CtmKl0Wc_lkoTqPrCviX8.jpg?r=8da"
        },
        {
          title: "Moi, moche et méchant les minions Illumination",
          href: "https://matheonyx.github.io/Nesdy/despicable%20me.html",
          imgSrc: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUTdsCl_NL4bhr2bLmYoioSNPVhuJC3-V5H82Dre5LppXx7h5FXBTTieBZ6u5fCZ99txbN2y8zFCTw7XM62fo-mYB60rDgkHC66c.jpg?r=f23"
        },
        {
          title: "Moi, moche et méchant 2 les minions Illumination",
          href: "https://matheonyx.github.io/Nesdy/despicable%20me%202",
          imgSrc: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTf7AYCVpaBw6HkPdDhSblIy47M1Z6gBUmyFFA0mUytln1aW-46VpzXo55H6uPQCrf3Nt8FbwQDsbLnXj3f_ya_Oq_X2ELy2kIoO.jpg?r=585"
        },
        {
          title: "Moi, moche et méchant 3 les minions Illumination",
          href: "https://matheonyx.github.io/Nesdy/Despicable%20me%203",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/Design%20sans%20titre%20(12).png?v=1717001255193"
        },
        {
          title: "Moi, moche et méchant 4 les minions Illumination",
          href: "https://matheonyx.github.io/Nesdy/Despicable%20me%204",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/Design%20sans%20titre%20(70).png?v=1722597405369"
        },
        {
          title: "Monstres et Compagnie Disney",
          href: "https://matheonyx.github.io/Nesdy/monstres%20et%20cie.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AB1FAAAD1221B6176EDE44889A98DCA0B5884EF43A22DBF303D75E893C9F5E47/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Mickey il était une fois noel Disney",
          href: "https://matheonyx.github.io/Nesdy/mickey%20once%20upon%20a%20Christmas.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/51EEA7BDB8CE64B637572C55F1B2F51F9625B96082B3ACD6E7B61DAC6879309B/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Meet me next christmas",
          href: "https://matheonyx.github.io/Nesdy/Meet%20me%20next%20christmas.html",
          imgSrc: "https://image.tmdb.org/t/p/original/8W12TIAKqYrKfoFANX1Si5os907.jpg"
        },
        {
          title: "Men in black",
          href: "https://matheonyx.github.io/Nesdy/Men%20in%20Black.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/JMOeIRCCxXLu6WIQOG-EtA/738x416.webp"
        },
        {
          title: "Men in Black 2",
          href: "https://matheonyx.github.io/Nesdy/men%20in%20black%202.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/88d1c27b6b2661968e56dc284b7735ddb4f98d582f35f68f359faad5403b819a.jpg"
        },
        {
          title: "Merlin l'enchanteur Disney",
          href: "https://matheonyx.github.io/Nesdy/merlin%20l'enchanteur.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5EE10C38D6C621CE8ED828CAEE1EC03737182C8D02B77CB6519D1C9BF35A2DD0/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Mulan Disney",
          href: "https://matheonyx.github.io/Nesdy/muland.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5CC71381475B1D6B746FD14DF999893D27ACB8CCDE009674894AABF60F667854/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Mulan 2 Disney",
          href: "https://matheonyx.github.io/Nesdy/Mulan2.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8A93CF7EB56145A72CF72A1F38B06C672F6830E03CDBB2C581CC61FFA546AE78/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Mickey de l'autre coté du miroir Disney",
          href: "https://matheonyx.github.io/Nesdy/mickey%20de%20l'autre%20cote%20du%20miroir.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9CF8D75B8A05855E122C48AF5637FA675E1C8713A255AE53B718CCB2CB69C7D9/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Mickey constructeurs de bateaux Disney",
          href: "https://matheonyx.github.io/Nesdy/mickey%20constructeur%20e%20bateau.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/ABED554D5E9A812FB7B3DFBD13F58BBE4DBAC05D0B8ABFB07D2CBA827696FFAE/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Matrix",
          href: "https://matheonyx.github.io/Nesdy/the%20matrix.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/86f4ace04af19c42a8748bb8da3ccf3ab2486499892aeba1fc58376ac4a4bf62.jpg"
        },
        {
          title: "Matrix 2",
          href: "https://magnetic-lowly-sodalite.glitch.me/monstres%20et%20cie.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video124/v4/fa/f9/f3/faf9f301-e826-8874-d555-cf93e5d0dbb3/pr_source.lsr/738x416.webp"
        },
        {
          title: "Matrix 3",
          href: "https://magnetic-lowly-sodalite.glitch.me/monstres%20et%20cie.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video124/v4/02/ba/5a/02ba5a30-249a-4002-6a98-83dd9ba39851/pr_source.lsr/738x416.webp"
        },
        {
          title: "Matrix 4",
          href: "https://magnetic-lowly-sodalite.glitch.me/monstres%20et%20cie.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video122/v4/27/4a/93/274a93bc-e246-3cca-1f6a-8c8b3bb365c0/pr_source.jpg/738x416.webp"
        },
        {
          title: "Le roi lion Mufasa Disney",
          href: "The Lion King.html",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/Design%20sans%20titre%20(83).png?v=1722680377688"
        },
        {
          title: "Mufasa Le roi lion Disney",
          href: "https://matheonyx.github.io/Nesdy/mufasa",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A5452BCDD705B92808889C51ECA4C93F5082FA2805AC51C00E67BE28864B681A/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Prometheus",
          href: "https://magnetic-lowly-sodalite.glitch.me/monstres%20et%20cie.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/ruW0ps0GNXZuQdD8DnRY8g/738x416.webp"
        },
        {
          title: "Prey Predator",
          href: "https://matheonyx.github.io/Nesdy/Prey.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/lqz-EwOJVkljLezrvxCDTw/738x416.webp"
        },
        {
          title: "Predators Prey",
          href: "https://matheonyx.github.io/Nesdy/predators.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/JnRqfUodh-xnRWrHDYUYrQ/738x416.webp"
        },
        {
          title: "Predators Requiem Prey",
          href: "https://matheonyx.github.io/Nesdy/alien%20vs%20predators%20requiem.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/bP0BxjWLTZMnx7d7tBo6yg/738x416.webp"
        },
        {
          title: "Predators 2 Prey",
          href: "https://magnetic-lowly-sodalite.glitch.me/monstres%20et%20cie.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/EDUHIbtf8T42UdWF6ycKFA/738x416.webp"
        },
        {
          title: "Alien vs Predators prey",
          href: "https://magnetic-lowly-sodalite.glitch.me/monstres%20et%20cie.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/MS6mplRHKiwRQuqrMnQXxg/738x416.webp"
        },
         {
          title: "The Predator prey",
          href: "https://matheonyx.github.io/Nesdy/the%20predator.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/789D4954C96BD6E3A068C44C7C20A47D55A1D4CA70D7FC90237B8A11F093BECF/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Paddington",
          href: "https://magnetic-lowly-sodalite.glitch.me/monstres%20et%20cie.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video124/v4/c0/5f/a2/c05fa2f5-9d8c-e636-db10-fb6456099c7d/944178596-WW-AMP_SF.lsr/738x416.webp"
        },
        {
          title: "Percy Jackson et les Olympiens",
          href: "Percy Jackson et les olympeins.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F8B9D70BEC09BAA4FD529700C8163A6A38FB7FACECEBAB1D42104D60E1C03F77/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Peter Pan Disney",
          href: "https://matheonyx.github.io/Nesdy/peter%20pan.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A493675734794E0DD2563A1595988F35F3152BB7062DA6F854515830B702873A/scale?width=1200&aspectRatio=1.78&format=webp"
        }, 
        {
          title: "Planes Disney",
          href: "https://matheonyx.github.io/Nesdy/Plane.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F19FB4253414CFD9AD6ED65D6EA268B1BFDBAFBE7A4CDF89668DC38BF15A1FB9/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "La Petite Sirène",
          href: "https://matheonyx.github.io/Nesdy/la%20petite%20sir%C3%A8ne.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/88145EA61ED29BDFBF5AEEE8D121F9B8110125F2CFD352AAB835BDB311257722/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "La Planète des Singes : Les Origines",
          href: "https://matheonyx.github.io/Nesdy/la%20planete%20des%20singes%20les%20origines.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DD7DC17CC47E4EF8FAC3E030AD5B7B99B4FCB7E7FEBD06D8287288A6FAF0D1BF/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "La Planète des Singes : L'Affrontement",
          href: "https://matheonyx.github.io/Nesdy/la%20planete%20des%20singes%20l'affrontement.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/780C6D8A71E8F00CFAE52DA1B135BC3BAC21640CA1A3882072B4E2EA49F3FD5A/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "La Planète des Singes : Suprématie",
          href: "https://matheonyx.github.io/Nesdy/la%20planete%20des%20singes%20suprematie.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/054402A20C849E90B24B906D08D68026CF8DA6882B8A844BEDA2A79DAEFEAB50/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "La Planète des Singes : Le Nouveau Royaume",
          href: "https://matheonyx.github.io/Nesdy/kingdom%20of%20the%20planet%20of%20the%20apes",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/63FCA40AF04C3384CBDCEB6BBF5C5C8DB51147644143278DDA007E4816AFFF00/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Baby Boss Dreamworks",
          href: "https://matheonyx.github.io/Nesdy/baby%20boss.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video124/v4/f1/e3/3c/f1e33cd7-d241-0917-b9e9-121621234eac/1219155711-WW-AMP_SF.lsr/738x416.webp"
        },
        {
          title: "Baby Boss 2 Dreamworks",
          href: "https://matheonyx.github.io/Nesdy/baby%20boss%202.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/74/fa/a4/74faa4c9-c911-ba80-19cc-f9faac7e2222/UNI_BOSS_BABY_FAMILY_BUSINESS_THE_EST_BE_FR_LU_ARTWORK_FR-FR_3840x2160_2ULYMC0000JWUY.png/738x416.webp"
        },
        {
          title: "Borderlands",
          href: "https://matheonyx.github.io/Nesdy/borderland.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/0d/d0/54/0dd0547c-617b-6e65-ed8b-ad5b9cc57d54/70bc9afb-05d5-4939-ba41-83e0e604d16d_Borderlands_iTunesStore_3840x2160_LSR.lsr/738x416.webp"
        },
        {
          title: "Bambi Disney",
          href: "https://matheonyx.github.io/Nesdy/bambi.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video124/v4/24/d3/57/24d3578b-24f1-6f86-2e71-0d5b12c87a8f/DIS_BAMBI_WW_ARTWORK_EN-US_3840x2160_1N4G7I000000CR.lsr/738x416.webp"
        },
        {
          title: "Jurassic Park",
          href: "https://matheonyx.github.io/Nesdy/jurassic%20park.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video124/v4/09/29/46/09294670-5894-09f1-0135-408146de20d4/596645698-WW-AMP_SF.lsr/738x416.webp"
        },
        {
          title: "Jurassic Park II",
          href: "https://matheonyx.github.io/Nesdy/le%20monde%20perdu%20jurassic%20park.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video112/v4/45/dd/ba/45ddba24-bfae-d045-7713-f270730bc6cb/pr_source.png/738x416.webp"
        },
        {
          title: "Jurassic Park III",
          href: "https://matheonyx.github.io/Nesdy/jurassic%20park%203.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video112/v4/5b/97/9e/5b979e7c-9a73-84ee-35f0-8dd28133b083/pr_source.png/738x416.webp"
        },
        {
          title: "Jurassic World",
          href: "https://matheonyx.github.io/Nesdy/jurassic%20world%201.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/76/16/46/76164681-31c5-eaaa-ce30-6c67be88c17b/126c5ba2-b351-4c55-a411-af20bcf984a2_JurassicWorld_3840x2160_intl_eng_keyart_full_digital_artwork_RGB_V1_sprk.png/738x416.webp"
        },
        {
          title: "Jurassic World Fallen Kingdom",
          href: "https://matheonyx.github.io/Nesdy/jurassic%20world%20fallen%20kingdom.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video112/v4/d4/aa/db/d4aadbcc-dc8b-25fc-2ddb-8fb6886dfa85/pr_source.png/738x416.webp"
        },
        {
          title: "Jurassic World Dominion Le Monde d'après",
          href: "https://matheonyx.github.io/Nesdy/jurassic%20world%20dominion",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video112/v4/85/b6/23/85b6239f-44c8-d917-d7c8-dea8eed36b94/contsched.cimedcoh.lsr/738x416.webp"
        },
        {
          title: "Batman",
          href: "https://matheonyx.github.io/Nesdy/Batman",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video112/v4/b2/55/f2/b255f2d1-582c-8b48-95ed-7df5aff912de/pr_source.jpg/738x416.webp"
        },
        {
          title: "Bambi 2 Disney",
          href: "https://magnetic-lowly-sodalite.glitch.me/jurassic%20world%20dominion.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/p690NrglFI7TstA_bzRwSw/738x416.webp"
        },
        {
          title: "BeetleJuice",
          href: "https://matheonyx.github.io/Nesdy/BeetleJuice",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/jzm7j3pHuLxU3lb9kVTPdw/738x416.webp"
        },
        {
          title: "BeetleJuice BeetleJuice",
          href: "https://matheonyx.github.io/Nesdy/beetlejuicebeetlejuice.html",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/beetlejuice%20beetlejuice.png?v=1728417561551"
        },
        {
          title: "Blanche-Neige SnowWhite Disney",
          href: "https://matheonyx.github.io/Nesdy/blanche%20neige.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/499B892AD0DA9A75DAB85D2BB5FF83CED3F8285E5960BDFB6D16BA7D6BE11EE7/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Basile Détective privé Disney",
          href: "https://matheonyx.github.io/Nesdy/basil%20d%C3%A9tective%20priv%C3%A9.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6E6C0DB63542C8F7D7AF786676FBC551A936137D5E0BA63C1007418B545B27CD/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Black Adam",
          href: "https://matheonyx.github.io/Nesdy/balck%20adam.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/aaa7e4e43add7fd31b516fa9e42a89b4be6d42958f15052ac8bc6e08657a978a.jpg"
        },
        {
          title: "Bernard et Bianca Disney",
          href: "https://matheonyx.github.io/Nesdy/bernard%20et%20bianca.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DEC45C045697DAD401057F1EB93614E4668152E2AA5702F29A2E6901676A3EB4/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Noelle",
          href: "https://matheonyx.github.io/Nesdy/Noelle.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1A1ACEDC670737CC4C8CCD567EA5A8C32B0C38F3D5ED14A7C6AF712BD460E18B/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Obi-Wan Kenobi Star Wars",
          href: "https://matheonyx.github.io/Nesdy/Obi-Wan.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/huIJ7TOckiTEbSUu38fRtQ/738x416.webp"
        },
        {
          title: "Once Upon a Studio Disney",
          href: "https://matheonyx.github.io/Nesdy/Once%20upon%20a%20studio.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CD99AC8DDCD7D7805CA1F5E56AB6A6F436B9AC3020D9CE0C13916751EF920398/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Oliver et Compagnie Disney",
          href: "https://matheonyx.github.io/Nesdy/oliver%20et%20compagnie.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/474ABCB868D0ABD1AECDF8DADD6F0363568803F85CB168CF013A2BD6803FFD9E/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Jumanji Bienvenue dans la jungle",
          href: "https://matheonyx.github.io/Nesdy/jumanji%20bienvenue%20dans%20la%20jungle.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/2EBS43avM0kkpEUAcYHevg/738x416.webp"
        },
        {
          title: "Jumanji Next Level",
          href: "https://matheonyx.github.io/Nesdy/jumanji%20next%20level.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/c54bf56c3d33ea62f5d483f484e742a64232ca605463e0065cde7cc2f7424ff5._UR1920,1080_.png"
        },
        {
          title: "Joker",
          href: "https://matheonyx.github.io/Nesdy/joker.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/dbcf059337bf2e9923d87a9142fe4fc54fda4ea96044a98fcd8a28d24088a969.jpg"
        },
        {
          title: "Joker: Folie à Deux",
          href: "https://matheonyx.github.io/Nesdy/joker%20folie%20a%20deux.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/e8/75/37/e8753750-7229-6027-e2f3-ce8a1a341622/Joker_Folie_a_Deux_H_DD_KA_TT_3840x2160_CVRART_300dpi_EN.png/738x416.webp"
        },
        {
          title: "Jungle Cruise Disney",
          href: "https://matheonyx.github.io/Nesdy/Jungle%20Cruise.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A68DBD783C60CB88DFD1492D149DF3CB2A036253F87B4212B35E57D4A4464C2F/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Transformers",
          href: "https://matheonyx.github.io/Nesdy/transformers.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/-5pl7x0a-uGdilwso39iBw/738x416.webp"
        },
        {
          title: "Transformers 2 : La Revanche",
          href: "https://matheonyx.github.io/Nesdy/transformers%202.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/f1/40/64/f1406458-473e-291a-8fb2-399c4fc0d060/pr_source.jpg/738x416.webp"
        },
        {
          title: "Transformers 3 - La Face cachée de la Lune",
          href: "https://matheonyx.github.io/Nesdy/transformers%203.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/74/d6/0a/74d60a22-9944-8e8d-6c4a-d843508cd217/pr_source.jpg/738x416.webp"
        },
        {
          title: "Transformers 4 : l'âge de l'extinction",
          href: "https://matheonyx.github.io/Nesdy/transformers%204.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/52/01/03/5201034e-14fd-8731-8c96-24c09f8fc021/pr_source.jpg/738x416.webp"
        },
        {
          title: "Transformers 5: The Last Knight",
          href: "https://matheonyx.github.io/Nesdy/transformers%205.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/GvcgDXlJyIADqZVQPAUxAw/738x416.webp"
        },
        {
          title: "Transformers: Rise of the Beasts",
          href: "https://matheonyx.github.io/Nesdy/transformers%206.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/8a/25/be/8a25be88-b59b-6ea1-0c4a-22c988f17d94/pr_source.lsr/738x416.webp"
        },
        {
          title: "Bumblebee Transformers",
          href: "https://matheonyx.github.io/Nesdy/Bumblebee.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/e9/92/58/e99258a9-8ab2-9289-80f6-7829dde9705d/pr_source.jpg/738x416.webp"
        },
        {
          title: "Ninja Turtles",
          href: "https://matheonyx.github.io/Nesdy/ninja%20turtle.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/zgGFv2lIclWSPTyAdMyNuQ/738x416.webp"
        },
        {
          title: "Ninja Turtles 2",
          href: "https://matheonyx.github.io/Nesdy/ninja%20turltes%202.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/6cdeeab9cee3436808c9daa9b85853414b57cccc0c6fa8b472a77bf2eee7da1a.jpg"
        },
        {
          title: "Tous en scène Illumination",
          href: "https://matheonyx.github.io/Nesdy/Tous%20en%20sc%C3%A8ne.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/509a039c7d66c397fdf5595e41eef8b2d85b449d43bb73b7b10b66c4592d7214._UR1920,1080_.png"
        },
        {
          title: "Tous en scène 2 Illumination",
          href: "https://magnetic-lowly-sodalite.glitch.me/jurassic%20world%20dominion.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/61/37/75/61377593-6df3-5b1d-5965-66a93724cebc/UNI_SING_2_TH_EST_BE_FR_LU_ARTWORK_FR-FR_3840x2160_32J8X900000BWL.lsr/738x416.webp"
        },
        {
          title: "The Union",
          href: "https://matheonyx.github.io/Nesdy/The%20Union.html",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/theunion.png?v=1726912445138"
        },
        {
          title: "The Penguin",
          href: "https://matheonyx.github.io/Nesdy/The%20Penguin.html",
          imgSrc: "https://cdn.glitch.global/b5e38bca-811c-495c-aa28-c13540ae7e7b/the%20penguin.png?v=1728241109098"
        },
        {
          title: "Astérix et Obélix : Mission Cléopâtre",
          href: "https://matheonyx.github.io/Nesdy/ast%C3%A9rix%20et%20ob%C3%A9lix%20mission%20cleopatre.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/b6e0bdf0b3a48bca057497377ef96ed7414552e17e04bf0e7567ad00fd9a9206.jpg"
        },
        {
          title: "Terrifier",
          href: "https://matheonyx.github.io/Nesdy/terrifier.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/38/73/bc/3873bc21-ebff-ae87-b131-4f5fd8b838a7/635182_16_9.png/738x416.webp"
        },
        {
          title: "Terrifier 2",
          href: "https://matheonyx.github.io/Nesdy/terrifier2.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/8K3Gx4hkRNYb7-TZ-NZdpA/738x416.webp"
        },
        {
          title: "Terminator",
          href: "https://matheonyx.github.io/Nesdy/terminator.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/f2035dfbff72d92a681dbea206c15e5634b6a846fcfae1cdd96c98124dfe8b6a.jpg"
        },
        {
          title: "The Creator",
          href: "https://matheonyx.github.io/Nesdy/The%20Creator.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/AajA4sV0YULTzrt8u6fEaA/738x416.webp"
        },
        {
          title: "Les Trolls Dreamworks",
          href: "https://matheonyx.github.io/Nesdy/Les%20Trolls.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/09125f55a6c97da9374353ad6f2847c6e4416ae570a39ded23c8470c6f891180.jpg"
        },
        {
          title: "Les Trolls 2: Tournée Mondiale",
          href: "https://matheonyx.github.io/Nesdy/les%20trolls2.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/2695d07c0c48bb08ba1b3af483dae6766cdae11e826990d28b93102c07a86b8e.jpg"
        },
        {
          title: "Les Trolls 3 Dreamworks",
          href: "https://matheonyx.github.io/Nesdy/Trolls%20Band%20Together.html",
          imgSrc: "https://i.ytimg.com/vi/xmdSSku6Twc/maxresdefault.jpg"
        },
        {
          title: "Taram et le chaudron magique Disney",
          href: "https://matheonyx.github.io/Nesdy/Taram%20et%20le%20chaudron%20magique.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/92AB5560A90C5B7BCCDFACE096774B77E5735380FEE7440B0BC2CBF8573AE708/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Top Gun Maverick 2",
          href: "https://matheonyx.github.io/Nesdy/top%20gun%20maverick.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/5099b0bb5c1a20bc2f43fe3a4934c94412c842a595deb5220d70a7ee959aae29.jpg"
        },
        {
          title: "Knuckles Sonic",
          href: "https://matheonyx.github.io/Nesdy/knuckles.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/gzjZTbwc1MOJ26S-mLBANg/738x416.webp"
        },
        {
          title: "Kung Fu Panda 1 Dreamworks",
          href: "https://matheonyx.github.io/Nesdy/Kung%20Fu%20Panda.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/bf/c6/f9/bfc6f94c-acd4-aa5a-d10c-2d65b5adbe22/3d2fe75b-1014-43c6-a80e-4a20fc8c763b_KungFuPanda_3840x2160_INTL_ENG_keyart_full_digital_artword_RGB.lsr/738x416.webp"
        },
        {
          title: "Kung Fu Panda 2 Dreamworks",
          href: "https://matheonyx.github.io/Nesdy/kung%20fu%20panda%202.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/_mLbcrkrG1pZicIOrN5Zzg/738x416.webp"
        },
        {
          title: "Kung Fu Panda 3 Dreamworks",
          href: "https://matheonyx.github.io/Nesdy/kung%20fu%20panda%203.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/7b/87/31/7b8731c9-9635-3c4a-f064-35c5145a0688/UNI_KUNGFUPANDA3_BE_FR_LU_ARTWORK_EN_3840x2160_225WEB000003XT.lsr/738x416.webp"
        },
        {
          title: "Kung Fu Panda 4 Dreamworks",
          href: "https://matheonyx.github.io/Nesdy/Kung%20Fu%20Panda%204",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/iD3I8_OVoK-whUKwky0EJA/738x416.webp"
        },
        {
          title: "Kraven The Hunter",
          href: "https://matheonyx.github.io/Nesdy/kraven.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/5fd87c26871b424de73a1e31319555397d15d3d7dc888f158acf6041d9a5e508.jpg"
        },
        {
          title: "Kuzco l'empereur mégalo Disney",
          href: "https://matheonyx.github.io/Nesdy/Kuzco%20l'empereur%20m%C3%A9galo.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/ED30FB6D7F23DF1F2AE356D29571F80C69B8714C5866747C6BA783966BF9A33E/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Godzilla vs Kong",
          href: "https://matheonyx.github.io/Nesdy/Godzilla%20Vs%20Kong",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video125/v4/ce/9b/9f/ce9b9f8e-69ee-3403-3d32-035f8493ab0f/pr_source.lsr/738x416.webp"
        },
        {
          title: "Godzilla x Kong: Le Nouvel Empire",
          href: "https://matheonyx.github.io/Nesdy/Godzilla%20X%20Kong%20The%20New%20Empiree.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a8/38/e5/a838e506-8736-d270-fc7a-eaae570c65b5/2cc741ab-e715-4727-b939-fc0f9d4bf7d3_GodzillaXKong_NewEmpire_H_DD_KA_TT_3840x2160_300dpi_FR_cd471a2a.JPEG/738x416.webp"
        },
        {
          title: "Godzilla",
          href: "https://matheonyx.github.io/Nesdy/Godzilla",
          imgSrc: "https://occ-0-114-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRA1eRRdm8rtWAeET14pQww0eGFtOzIGDyZsLQqMA6Sq0k_k8Kzp6NjBGSdKcALmo5o5kaeGjSzs8nN_kEs4oTG7l9RZwKhuX1Vd.jpg?r=fe1"
        },
        {
          title: "Godzilla II 2 Roi des monstres",
          href: "https://matheonyx.github.io/Nesdy/Godzilla%20II%20Roi%20des%20Monstres.html",
          imgSrc: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdtwUdBIskF6qK2TI-CGcXcdcIdrcvJuhuND1SaveKsQn-UG-xbztkdS9t3nJCboxFWOq-Mx-EITAeBqYG5i2c8snhiLle0n32AL.jpg?r=0c7"
        },
        {
          title: "Vice-Versa Pixar Disney",
          href: "https://matheonyx.github.io/Nesdy/Vice-Versa",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/Design%20sans%20titre%20(80).png?v=1722630237152"
        },
        {
          title: "Vaiana Disney",
          href: "https://matheonyx.github.io/Nesdy/Vaiana.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3787D4310930F82238BD43734D39B5DCEF24647EDBE4DD8A44F2E6B02268A669/scale?width=800&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Vaiana 2 Disney",
          href: "https://matheonyx.github.io/Nesdy/vaiana2",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E142A98B41646B7E62B2FB491327DEDE5FEF6DB9C7734C78B7F1866E448BCCAF/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Venom Marvel",
          href: "https://matheonyx.github.io/Nesdy/venom.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CD95B5409EA8B4987A467BADB3E0925FFFBB67665D18F8DE67E9E76967EBAE16/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Venom 2 Let there be carnage Marvel",
          href: "https://matheonyx.github.io/Nesdy/venom%20let%20there%20be%20carnage.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/43b9eb0d584719bb98e3148f8ae178bd4678280d4f519ce4fccedf4b821db01c.jpg"
        },
        {
          title: "Venom 3 The Last Dance Marvel",
          href: "https://matheonyx.github.io/Nesdy/venom3",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/venom3.png?v=1730664265207"
        },
        {
          title: "Vaillante",
          href: "https://matheonyx.github.io/Nesdy/vaillante.html",
          imgSrc: "https://images.rtl.fr/~c/1152v648/m6/bulletin/1721590-vaillante.jpg"
        },
        {
          title: "Vice-Versa 2 Pixar Disney",
          href: "https://matheonyx.github.io/Nesdy/vice%20versa%202.html",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/Design%20sans%20titre%20(52).png?v=1719250978697"
        },
        {
          title: "Cars Disney Pixar",
          href: "https://matheonyx.github.io/Nesdy/Cars",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DAEA3DF262FC8CB385256F2120EB4DD65F00E6EC1A81856ADB6C4E81AD70EFC8/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Cars 2 Disney Pixar",
          href: "https://matheonyx.github.io/Nesdy/Cars%202",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DBD5533F17B9EE43C09428933ED51A53A7125EE02DA7D6D9A878DF305CFA0B86/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Cars 3 Disney Pixar",
          href: "https://matheonyx.github.io/Nesdy/Cars%203",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/480C5814B179254B5117CAEA8805BD680437DEC1554A1A387821815B242ABD17/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Comme des Bêtes Illumination",
          href: "https://matheonyx.github.io/Nesdy/comme%20des%20betes.html",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/Design%20sans%20titre%20(61).png?v=1722010993626"
        },
        {
          title: "Comme des Bêtes 2 Illumination",
          href: "https://matheonyx.github.io/Nesdy/commedesbetes2.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/e0250aa323c66454e3b0dd21c57c55d2dfa712726333a33f03878a665b6b81e9.jpg"
        },
        {
          title: "Charlie et la chocolaterie Wonka",
          href: "https://matheonyx.github.io/Nesdy/charlie%20et%20la%20chocolaterie.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video123/v4/e5/92/c8/e592c8cc-37f5-d632-ff3f-8031c6091b68/CATCF_H_DD_KA_TT_3840x2160_300dpi_FR.lsr/738x416.webp"
        },
        {
          title: "Un Noel de Folie",
          href: "https://matheonyx.github.io/Nesdy/un%20noel%20de%20folie.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/089abfcaf5d35dcd671585bcaefd9912f6ea2f4b4407ddf26b0ee6ba447e3543.jpg"
        },
        {
          title: "La Fée Clochette et le Secret des Fées Disney",
          href: "https://matheonyx.github.io/Nesdy/la%20fee%20clochette%20et%20le%20secret%20des%20fees.html.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8D18D6208A6C51C464FB3CABBF125D8D7D083015C8AC250C6EF4EF1D7D1FFF2D/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Coco Pixar Disney",
          href: "https://matheonyx.github.io/Nesdy/Coco",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2E553D6F40BD31F6E3C05E96FA04BDB2DDA6D37B40FDBAC75C12364AE6631C7D/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Cendrillon Disney",
          href: "https://matheonyx.github.io/Nesdy/cendrillon.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EDDB29B7E08676D4C05ABBBBB2A493EAA822CE44013211F6565DC2D58320DC7F/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Walt Disney Studios",
          href: "https://matheonyx.github.io/Nesdy/Walt%20Disney%20Collection.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6325B69DA9F443F25EAE6C90ADEA67B0BB3A8B061D0505290A40FF1A50942E2A/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Wonka Charlie et la Chocolaterie",
          href: "https://matheonyx.github.io/Nesdy/Wonka.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/fe/db/89/fedb89a6-0fc4-99c8-9a8a-8aad0dfb0b2c/8b510417-50e6-43d5-98e0-a4fe1408c91e_WONKA_38.jpg/738x416.webp"
        },
        {
          title: "Wicked",
          href: "https://matheonyx.github.io/Nesdy/wicked.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/e183d6999ac9b45d9d1f78072abd9ecccb345a6eed2c05445cd6b96b4ed927ee.jpg"
        },
        {
          title: "Wall-E Disney Pixar",
          href: "https://matheonyx.github.io/Nesdy/Wall-E",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/Design%20sans%20titre%20(81).png?v=1722630958922"
        },
        {
          title: "Young Sheldon",
          href: "https://matheonyx.github.io/Nesdy/Young%20Sheldon.html",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/Young%20Sheldon.png?v=1724059289380"
        },
        {
          title: "Ratatouille Pixar Disney",
          href: "https://matheonyx.github.io/Nesdy/ratatouille",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FEF6E538FB86E83A8E16B864FE54CDA6F5C2229A9EAD5995BA91664B3EF0CBC8/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Le Robot Sauvage Dreamworks",
          href: "https://matheonyx.github.io/Nesdy/lerobotsauvage.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/b2031e02cd4e3c2a73d2f7990fe27a2c68ee206772632476b23e544253392503.jpg"
        },
        {
          title: "Raya et le dernier dragon Disney",
          href: "https://matheonyx.github.io/Nesdy/Raya%20et%20le%20dernier%20dragon.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F6EB96E2A692212EEEC6C4B49E866F5EF36BD8F578EF3B890C3A747F71EE9FAA/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Rox et Rouky Disney",
          href: "https://matheonyx.github.io/Nesdy/Rox%20et%20Rouky.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/71E2ABC21AB1F1CAFAD0D14764EC9040D1E90EF27F3ED359766D74B0A8BBD6CB/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Robin des bois Disney",
          href: "https://matheonyx.github.io/Nesdy/Robin%20des%20bois.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/165700C69DDD3E7F2B1FAD8CC8B40967FB3C7F68B1C137F16395B2BCD754F941/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Red One",
          href: "https://matheonyx.github.io/Nesdy/red%20one.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/0c693fc07455ac22125f2305edbff2876a6c45effae36ce2f1f7b915ea265fc3.jpg"
        },
        {
          title: "Furiosa A Mad Max Story",
          href: "https://matheonyx.github.io/Nesdy/Furiosa",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/93542555d24e532f07400c14bfa98c95573189baacb7760b19e29ea643c8dd2c.jpg"
        },
        {
          title: "Frère des ours Disney",
          href: "https://matheonyx.github.io/Nesdy/frere%20des%20ours.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A5FAB32BAA2EBDB7967328CA1BAB1C7044CF155BE9F2E386314530CECE3D3D69/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Fantasia Disney",
          href: "https://matheonyx.github.io/Nesdy/fantasia.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/30FDBDA5A036F885F4699F96238041A6836BB2A105267FACF55A9E1BF1C89E8A/scale?width=400&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Fast and Furious Collection",
          href: "https://windy-tabby-slouch.glitch.me/fast%20and%20furious.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/9f/ce/6e/9fce6e2f-6d24-5b9a-b2b1-c04aee08017a/6403f12f-a0ce-4bda-9ee2-788c712a9fd9_FastFurious10-MovieCollection_3840x2160_fr_fra_bundleart_full_digital_artwork_RGB_V1_sprk.png/738x416.webp"
        },
        {
          title: "Les Gremlins",
          href: "https://matheonyx.github.io/Nesdy/gremlins.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video113/v4/5d/4a/c7/5d4ac744-febc-e1f5-c1a5-0bfc3d420496/pr_source.lsr/738x416.webp"
        },
        {
          title: "Les Gremlins 2",
          href: "https://magnetic-lowly-sodalite.glitch.me/Wish.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/pur9KMFHHB9uMpT_w5VgSw/738x416.webp"
        },
        {
          title: "Gladiator",
          href: "https://magnetic-lowly-sodalite.glitch.me/Wish.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/7529c8d592af8e0a7b615a48b0bb7e6e0a5f1cda6d703b4cbc734e5dd38e24f5.jpg"
        },
        {
          title: "Gladiator 2",
          href: "https://matheonyx.github.io/Nesdy/gladiator%202.html",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/galdiator%202.png?v=1735855501557"
        },
        {
          title: "Sonic",
          href: "https://matheonyx.github.io/Nesdy/sonic%20le%20film.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video113/v4/6a/92/67/6a9267c7-ffd2-4b25-6c83-b9f7f746a18f/pr_source.lsr/738x416.webp"
        },
        {
          title: "Sonic 2",
          href: "https://matheonyx.github.io/Nesdy/sonic2.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video122/v4/d3/30/fc/d330fc73-e07d-d17f-0a0a-a272e24f2f12/pr_source.lsr/738x416.webp"
        },
        {
          title: "Sonic 3",
          href: "https://matheonyx.github.io/Nesdy/sonic3.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/c1/bf/30/c1bf302d-0af8-59d7-9aab-39d55cf2c76c/Sonic3_EN_3840x2160.png/738x416.webp"
        },
        {
          title: "Shrek Dreamworks",
          href: "https://matheonyx.github.io/Nesdy/shrek.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video113/v4/f0/dc/3c/f0dc3c0d-1952-14f7-acc0-00a2098a3a97/909738047-WW-AMP_SF.lsr/738x416.webp"
        },
        {
          title: "Shrek 2 Dreamworks",
          href: "https://matheonyx.github.io/Nesdy/shrek%202.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/cb/76/a1/cb76a1a4-0907-c187-4825-c24a2a1a4fbf/57277274-28e5-44b0-b9ec-b5de05b9a7a7_Shrek2_3840x2160_INTL_ENG_keyart_full_digital_artwork_RGB_V1_sprk.lsr/738x416.webp"
        },
        {
          title: "Shrek 3 Dreamworks",
          href: "https://matheonyx.github.io/Nesdy/Shrek%203.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video124/v4/20/64/5a/20645a36-3d52-75c5-766d-be217474e7aa/UNI_SHREK_THE_THIRD_BE_FR_LU_ARTWORK_FR-FR_3840x2160_2CBL14000001TH.lsr/738x416.webp"
        },
        {
          title: "Shrek 4 Dreamworks",
          href: "https://magnetic-lowly-sodalite.glitch.me/gladiator%202.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/ecca22e801c2e27ab812c0d09a89e712e923826121b2c0d271c7110a1d5588fc.jpg"
        },
        {
          title: "The Super Mario Bros. Le Film Illumination",
          href: "https://matheonyx.github.io/Nesdy/The%20Super%20Mario",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/Design%20sans%20titre%20(60).png?v=1721936040835"
        },
        {
          title: "Spider-Man Marvel",
          href: "https://matheonyx.github.io/Nesdy/spiderman.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/46/9b/a6/469ba6e9-8327-04d2-a2ff-dd2c6c410c8c/SPE_SPDRMN2002_FR_ARTWORK_FR-FR_3840x2160_1MQY5N000000ES.png/738x416.webp"
        },
        {
          title: "Spider-Man 2 Marvel",
          href: "https://matheonyx.github.io/Nesdy/spiderman2.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/TTv9_JsmP9YMsWbt5ocVjQ/738x416.webp"
        },
        {
          title: "Spider-Man 3 Marvel",
          href: "https://matheonyx.github.io/Nesdy/spiderman3.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video124/v4/4d/60/70/4d60705a-5450-7bf1-10f2-b8707fdc8688/SPE_SPIDERMAN_3_FR_ARTWORK_EN_3840x2160_1MQSIS000000FV.png/738x416.webp"
        },
        {
          title: "The Amazing Spider-Man Marvel",
          href: "https://magnetic-lowly-sodalite.glitch.me/The%20Amazing%20Spider-Man.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/27/11/2b/27112b21-4629-a4aa-8644-c17eb8a06ead/SPE_AMSPMA_FR_ARTWORK_EN_3840x2160_1MQ9I1000000D7.png/738x416.webp"
        },
        {
          title: "The Amazing Spider-Man 2 Marvel",
          href: "https://matheonyx.github.io/Nesdy/theamazingspiderman2.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video123/v4/af/05/de/af05deb3-0fb5-a53b-7804-13689a51b528/SPE_AMZS2_FR_ARTWORK_FR-FR_3840x2160_1MC554000000F5.png/738x416.webp"
        },
        {
          title: "Spider-Man: Homecoming Marvel",
          href: "https://matheonyx.github.io/Nesdy/spider%20man%20homecoming",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/Design%20sans%20titre%20(73).png?v=1722617940673"
        },
        {
          title: "Spider-Man: Far From Home Marvel",
          href: "https://matheonyx.github.io/Nesdy/spider%20man%20far%20from%20home",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video113/v4/62/3b/0c/623b0ca5-cb4e-07b3-2eae-2c87861bd622/SPE_SPIDER-MAN_FAR_FROM_HOME_TH_FINAL_WW_ARTWORK_EN_3840x2160_1SN6S000000DEC.lsr/738x416.webp"
        },
        {
          title: "Spider-Man: No Way Home Marvel",
          href: "https://matheonyx.github.io/Nesdy/Spider-Man%20NWH",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/bd/c0/e2/bdc0e247-cfb7-934a-c004-9f294d12ebb4/SPE_SPIDERMAN_NO_WAY_HOME_TH_FR_ARTWORK_EN_3840x2160_3358QV00000KFA.lsr/738x416.webp"
        },
        {
          title: "Spider-Man into the Spider-Verse Marvel",
          href: "https://matheonyx.github.io/Nesdy/spider-man%20into%20the%20spider-verse.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video123/v4/27/ad/01/27ad01d0-5b9a-dcd0-e75a-3594b986e2a5/SPE_SPINSW_TH_FR_FR_ARTWORK_FR-FR_EN_3840x2160_1QUWH9000000D6.lsr/738x416.webp"
        },
        {
          title: "Spider-Man: Across the Spider-Verse Marvel",
          href: "https://matheonyx.github.io/Nesdy/Spider%20Man%20across%20the%20spider%20verse.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/7_wUTZFOnnT9gt-3DRsAcw/738x416.webp"
        },
        {
          title: "Shazam: La Rage des dieux",
          href: "https://matheonyx.github.io/Nesdy/Shazam%20La%20Rage%20des%20Dieux.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/99c08df98295f1ff32b439a2b93f27358a12e7fb0473f9141d32c5376b63a314.jpg"
        },
        {
          title: "Star Wars Collection",
          href: "https://matheonyx.github.io/Nesdy/Star%20Wars%20Page",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Features113/v4/f3/df/df/f3dfdf99-50d4-e8c2-08ec-c8599fb55637/mza_675323467412586151.png/738x416.webp"
        },
        {
          title: "Titanic",
          href: "https://chisel-calico-tent.glitch.me/star%20wars%20page.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/313C9883C0085FB412D28656A3CC37DCDC46BC11032FD7D5FC61F475FDD86BED/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Les Gardiens de la Galaxie Vol.1 Marvel",
          href: "https://matheonyx.github.io/Nesdy/Les%20Gardiens%20de%20la%20galaxie%20vol.1.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video124/v4/93/e3/ea/93e3eaad-b661-805d-742d-f9748a7ac386/DIS_GUARD1_WW_ARTWORK_EN-US_3840x2160_1MO05F000000CL.lsr/738x416.webp"
        },
        {
          title: "Les Gardiens de la Galaxie Vol.2 Marvel",
          href: "https://matheonyx.github.io/Nesdy/les%20gardiens%20de%20la%20galaxie%20vol2.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B948CA0576A38827326618C7B1DAD51667CD9200E9AD4D6F50F7E7FEB38D6459/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Les Gardiens de la Galaxie Vol.3 Marvel",
          href: "https://matheonyx.github.io/Nesdy/les%20gardiens%20de%20la%20galaxie%203",
          imgSrc: "https://dealabsmag.com/wp-content/uploads/2023/05/gardiens-de-la-galaxie-vol3.jpeg"
        },
        {
          title: "Iron Man Marvel",
          href: "https://matheonyx.github.io/Nesdy/Iron%20Man.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video113/v4/2d/74/f4/2d74f463-8fd3-f960-aeaa-d9757cc37203/DIS_IRON_WW_ARTWORK_EN_3840x2160_1MO1NI000000CI.lsr/738x416.webp"
        },
        {
          title: "Iron Man 2 Marvel",
          href: "https://matheonyx.github.io/Nesdy/iron%20man%202.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video123/v4/f5/1e/79/f51e79a3-cb2e-ecc5-8a96-83f604f4e2a4/DIS_IRON2_WW_ARTWORK_EN-US_3840x2160_1MO23U000000CL.lsr/738x416.webp"
        },
        {
          title: "Iron Man 3 Marvel",
          href: "https://matheonyx.github.io/Nesdy/IRON%20MAN%203.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F1E945B7AB933F7A474C5ECAD5AB895ECBF763F80DF64B835D131D41F4D90BD/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Captain America: First Avengers Marvel",
          href: "https://matheonyx.github.io/Nesdy/captain%20america%20first%20avengers.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AFF20C70608850FB08710BB04C511761E85C7F1D34E6DA305C2F55C8AF272166/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Captain America: Le Soldat de l'hiver Marvel",
          href: "https://matheonyx.github.io/Nesdy/captain%20america%20et%20le%20soldat%20de%20l'hiver.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/60B188990D3F0619A167A76200CCB6985675ACC044D9BEAD5194E02D37C2D440/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Captain America: Civil War Marvel",
          href: "https://matheonyx.github.io/Nesdy/captain%20america%20civil%20war.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video124/v4/31/73/51/317351c0-9a1e-756b-d1ad-c176abc02bd8/DIS_CAPTAIN3_WW_ARTWORK_EN-US_3840x2160_1MNY4E000000CI.lsr/738x416.webp"
        },
        {
          title: "Captain America: Brave The New World Marvel",
          href: "https://matheonyx.github.io/Nesdy/captain%20america%20brave%20new%20world.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B98993E92597D615AE2F995F02958986137B5084A381B10891688F20EA224574/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Black Panther Marvel",
          href: "https://matheonyx.github.io/Nesdy/Black%20Panther%201.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/56/7d/66/567d66f7-889d-7802-bf68-c8d6f8aa0d6a/DIS_BLACK_WW_ARTWORK_EN-US_3840x2160_1MNHXZ000000D6.lsr/738x416.webp"
        },
        {
          title: "Black Panther:  Wakanda Forever Marvel",
          href: "https://matheonyx.github.io/Nesdy/Black%20panther%20wakanda%20forever.html",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/Black%20Panther%20Wakanda%20Forever.png?v=1724058827682"
        },
        {
          title: "Piège de Cristal",
          href: "https://matheonyx.github.io/Nesdy/Piege%20de%20cristal.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/59064f2d0c058af5585caab473fad8c345ca3782c29cbfe24e604ba59586c47e.jpg"
        },
        {
          title: "Atlantide, l' empire perdu Disney",
          href: "https://matheonyx.github.io/Nesdy/atlantide.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/85E39D9A89B40BD81F16837C6920A2E5576B5A22CC2055D9DD615FC82A82CFFB/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "L'Étrange Noël de monsieur Jack Disney",
          href: "https://matheonyx.github.io/Nesdy/L'%C3%A9trange%20Noel%20de%20Mr%20Jack",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6C64E1A66362E4E11143EDFE7FA894CA368A802BE858725B317246FA98E63DC6/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "The Marvel's Marvel",
          href: "https://matheonyx.github.io/Nesdy/the%20Marvel's.html",
          imgSrc: "https://pbs.twimg.com/media/GDshTzZX0AAsar-.jpg"
        },
        {
          title: "Armageddon",
          href: "https://matheonyx.github.io/Nesdy/armageddon.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/0dc760663f000c7eb1b381f31b3be76610805b9ab015b79c9603144165733ba9.jpg"
        },
        {
          title: "Buzz l'éclair Disney",
          href: "https://matheonyx.github.io/Nesdy/lightyear",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6B7F0E802BB3377687F5CFBF289C81668B58A1A27C3A39C31EDFB58C9414A5BF/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "SOS Fantomes 1",
          href: "https://matheonyx.github.io/Nesdy/sos%20fantomes.html",
          imgSrc: "https://cdn.glitch.global/b5e38bca-811c-495c-aa28-c13540ae7e7b/Design%20sans%20titre%20(92).png?v=1722711503903"
        },
        {
          title: "SOS Fantomes 2",
          href: "https://matheonyx.github.io/Nesdy/sos%20fantomes%202.html",
          imgSrc: "https://cdn.glitch.global/b5e38bca-811c-495c-aa28-c13540ae7e7b/Design%20sans%20titre%20(93).png?v=1722711856154"
        },
        {
          title: "SOS Fantomes 2016",
          href: "https://magnetic-lowly-sodalite.glitch.me/Despicable%20me%203.html",
          imgSrc: "https://cdn.glitch.global/b5e38bca-811c-495c-aa28-c13540ae7e7b/Design%20sans%20titre%20(91).png?v=1722711177659"
        },
        {
          title: "SOS Fantomes l'héritage",
          href: "https://matheonyx.github.io/Nesdy/S.O.S%20fantomes%20l'h%C3%A9ritage.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/9df8eadf83d8ef66b7d0e679deb2b35c1e6e17102af8d47dddd60de766ac0943.jpg"
        },
        {
          title: "SOS Fantomes la menace de glace",
          href: "https://matheonyx.github.io/Nesdy/SOS%20Fantomes%20la%20menace%20de%20glace.html",
          imgSrc: "https://cdn.glitch.global/b5e38bca-811c-495c-aa28-c13540ae7e7b/Design%20sans%20titre%20(94).png?v=1722712671365"
        },
        {
          title: "Karaté Kid",
          href: "https://matheonyx.github.io/Nesdy/karat%C3%A9%20kid.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/36c87917428a50fdbb5d7481433ddbddf544083e8d6d2b141ec61e84f5a5448c.jpg"
        },
        {
          title: "Le Chat Potté Dreamworks",
          href: "https://matheonyx.github.io/Nesdy/lechatpott%C3%A9.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/51e90d538485b1f3f891399f505e269b2c985d02dd0b4aba18889494f6cf28c1.jpg"
        },
        {
          title: "Le Chat Potté 2 : la dernière quête Dreamworks",
          href: "https://matheonyx.github.io/Nesdy/puss%20in%20boots%202.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/59/a0/4b/59a04bb2-db1e-b344-72c9-6c4d639b745d/contsched.dxhivrrq.lsr/738x416.webp"
        },
        {
          title: "Epic La Bataille du royaume secret",
          href: "https://matheonyx.github.io/Nesdy/epic.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/832EDFAD3D2AAC937D6E6C59DE0522F12FD1FF79D82F64CD80482BEA56ABE3E2/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Paddington au Pérou",
          href: "https://matheonyx.github.io/Nesdy/paddingtonauperu.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/832EDFAD3D2AAC937D6E6C59DE0522F12FD1FF79D82F64CD80482BEA56ABE3E2/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "The Simpsons: Past and Furious",
          href: "https://matheonyx.github.io/Nesdy/simpson%20past%20and%20furious.html",
          imgSrc: "https://i.ytimg.com/vi/CFT4n6vtaog/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAJeqnNgKehCQ3OdHXWyzCFRvM8aA"
        },
        {
          title: "Les 101 Dalmatiens",
          href: "https://matheonyx.github.io/Nesdy/101%20dalmatiens.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D3C3D6C0031DE711C2DC6044EFDE2988E9DB4088FD46643B0995A838BA65FC05/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "The Electric State",
          href: "https://matheonyx.github.io/Nesdy/the%20lectric%20states.html",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/Design%20sans%20titre%20(1).png?v=1742406875472"
        },
        {
          title: "Mickey 17",
          href: "https://matheonyx.github.io/Nesdy/mickey17",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/46c0efe4e8731e52af3a62ca64d942e3c04043d1a5f00961d7b88eecec5e0535.png"
        },
        {
          title: "Maze Runner Le Labyrinthe",
          href: "https://matheonyx.github.io/Nesdy/maze%20runner.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video124/v4/56/91/6a/56916aab-31fa-157d-cc12-3512992cd4bc/919191062-WW-AMP_SF.lsr/738x416.webp"
        },
        {
          title: "Godzilla Minus One",
          href: "https://matheonyx.github.io/Nesdy/godzilla%20minus%20one.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/iexFF2El5OaDiyUzzALwIg/738x416.webp"
        },
        {
          title: "Tron : L'Héritage",
          href: "https://matheonyx.github.io/Nesdy/tron%20legacy.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/21E03231AFC71E9AEA2298930A029DA8210A270F8483EC5AE224985C2E9446D1/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Chair de Poule Goosebumps",
          href: "https://matheonyx.github.io/Nesdy/Chair%20de%20poule.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/995D97A1CD655958FC770E6EB72CC75155B87987646A7C5B11D4A130D18118EA/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "The Last of Us HBO Max Series",
          href: "https://magnetic-lowly-sodalite.glitch.me/the%20last%20of%20us.html",
          imgSrc: "https://beam-images.warnermediacdn.com/2025-03/the-last-of-us-s2-og-image.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com"
        },
        {
          title: "Star Wars, épisode I : La Menace fantôme",
          href: "https://matheonyx.github.io/Nesdy/star%20wars%201.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EF0A0EE8806940F08C7B3C44319B03BF0A05FCED788A9A7F425FBAF718E76F09/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Star Wars, épisode II : L'Attaque des clones",
          href: "https://matheonyx.github.io/Nesdy/star%20wars2.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BF913C73E2BFFD8BC704E169212519376048BEA515F9B18BD39BD1D12F350FF/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Star Wars, épisode III : La Revanche des Sith",
          href: "https://matheonyx.github.io/Nesdy/star%20wars%203.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4D0DBB5FC46F5FD8B496F64325A7811DC439EBF4064AC419FBEDA4376DF765B7/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Star Wars, épisode IV : Un Nouvel Espoir",
          href: "https://matheonyx.github.io/Nesdy/star%20wars%204.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6C1BB8C226681F684CF4F859C4E59204C1AE70CBD6097BD6E53693E743B95EF7/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Star Wars, épisode V : L'Empire contre-attaque",
          href: "https://matheonyx.github.io/Nesdy/star%20wars%20V.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/22728F0CB83AEFBBC3760145C565E182A1B6F63AA5C973E05221522F4775986C/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Star Wars, épisode VI : Le Retour du Jedi",
          href: "https://matheonyx.github.io/Nesdy/Star%20wars%20VI.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/54E426429792FE3BAE27D0C714FBC1406146DB10A1EF1EBEC119A95FAF0FE90D/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Star Wars, épisode VII : Le Réveil de la Force",
          href: "https://matheonyx.github.io/Nesdy/Star%20wars%20VII",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DD04CB1712F15E373D124A48CBCB812F12F0112EC2F0D5AAB272A64CC4C1CAB1/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Star Wars, épisode VIII : Les Derniers Jedi",
          href: "https://matheonyx.github.io/Nesdy/star%20wars%20the%20last%20jedi",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6D19202DCC81F1C22567C8031302FE7093C8D52AE8A7C809B6037D02A119AF13/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Star Wars, épisode IX : L'Ascension de Skywalker",
          href: "https://matheonyx.github.io/Nesdy/star%20wars%20IX",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/73FADB81F6619DD62941A8A7EBDDCFA85E930A95F452FC6F6EEC5A46C09FBC9F/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Blanche Neige Snowwhite Disney",
          href: "https://matheonyx.github.io/Nesdy/blancheneige.html",
          imgSrc: "https://cdn.glitch.global/b5e38bca-811c-495c-aa28-c13540ae7e7b/snowwhite.png?v=1746911883604"
        },
        {
          title: "Big Hero 6 Disney",
          href: "https://matheonyx.github.io/Nesdy/Big%20Hero%206",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/28E7988A1691861933024190FFF9EE73C340D3700AD6536E8215454365A7A5FF/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Hercule Disney",
          href: "https://matheonyx.github.io/Nesdy/hercules.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/42D61F2E950DC04C38342779162E6E07AF9ABB83C46162E7685CEB4F5877958F/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Paddington au Pérou",
          href: "https://matheonyx.github.io/Nesdy/paddingtonauperu.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/2884e97ce201a02f6e0930002abb41492e2e5212ec75fb723d2fe5623798f84c.jpg"
        },
        {
          title: "Zootopie Disney",
          href: "https://matheonyx.github.io/Nesdy/Zootopie.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/74E827F13D07A634F5A1B7013A00C3323CD672B3B900C25CBFABB993E5BD7A57/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Minecraft, le film",
          href: "https://matheonyx.github.io/Nesdy/minecraft.html",
          imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/0427576a5a5fcfb736cb22d7445e3cf28c35a65702481d04e0ccbcbaea2f1ee2.jpg"
        },
        {
          title: "Winnie l'ourson Disney",
          href: "https://matheonyx.github.io/Nesdy/winniethepoo.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/09E8049DAB2A38D61CC4F5CF5C6996ECF7FF8F79085019DF481F41F9BAA4F147/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Thor Marvel",
          href: "https://matheonyx.github.io/Nesdy/thor.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/b1/f1/cc/b1f1cc16-35bb-9122-9b87-06610fe9d507/DIS_THOR_WW_ARTWORK_EN-US_3840x2160_1MP5YQ000000CL.lsr/738x416.webp"
        },
        {
          title: "Thor 2 Le Monde des Ténèbres Marvel",
          href: "https://matheonyx.github.io/Nesdy/thor%20le%20monde%20des%20t%C3%A9n%C3%A8bres.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2D9550B97FFCF476FAE165E2F79BA22FA1F9248674CAACB19DDD7427D0707E7A/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Thor : Ragnarok Marvel",
          href: "https://matheonyx.github.io/Nesdy/thor%20ragnarok",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/Ragnarok.png?v=1723658763247"
        },
        {
          title: "Thor Love and Thunder Marvel",
          href: "https://matheonyx.github.io/Nesdy/Thor%20Love%20and%20Thunder.html",
          imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/Design%20sans%20titre%20(66).png?v=1722102208003"
        },
        {
          title: "Shang-Shi La Légende des dix anneaux Marvel",
          href: "https://matheonyx.github.io/Nesdy/Shang-Shi.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FBBABDB3C228DF92522C961734FC59CB751A82717204C296ABEE29D1E5CEDF55/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Les Éternels Marvel",
          href: "https://matheonyx.github.io/Nesdy/eternals.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AFCB276281C4C5EA93DFAC6E0183F7F901504A1E733C75D0D6D6D25D042163F4/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "X-Men: Days of Future Past Marvel",
          href: "https://matheonyx.github.io/Nesdy/x-men%20day%20of%20future%20past.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/538E36C20FD81793563BCDB786A7572628A26F73911CBA7F850C80EBA00359A1/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "X-Men: Apocalypse Marvel",
          href: "https://matheonyx.github.io/Nesdy/x-men%20apocalypse.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E98D13F91C06E25C7CE6DF8DBDF89862D9D193A8D0F24A04349A83C35F1101D7/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
          title: "Encanto : La Fantastique Famille Madrigal Disney",
          href: "https://matheonyx.github.io/Nesdy/Encanto.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/99894D966FFD65185A8AF0411AD8E968637C3D5B5149CA957BF0203B80EB681C/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Pocahontas Disney",
          href: "https://matheonyx.github.io/Nesdy/pocahontas.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8F447358DDFE1494C6A571F0AF283EA86E7EC3112D49A46B58830BDE3DA78BE7/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Toy Story Pixar Disney",
          href: "https://matheonyx.github.io/Nesdy/Toy%20Story.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8F161B52338EE723D8F1C5DA31740A434E4A85F8749F9E2B9984309C287B90CF/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Toy Story 2 Pixar Disney",
          href: "https://matheonyx.github.io/Nesdy/Toy%20Story%202.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4667D541430B42E82AF161915C9EA0CE13A4108C4ECA15AC6DBFA3A0030B3F6B/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Toy Story 3 Pixar Disney",
          href: "https://matheonyx.github.io/Nesdy/Toy%20Story%203.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DFA21D80509E043EC4CB79E121224FA2FB344AF40ED03B510576F4ED9D831960/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Toy Story 4 Pixar Disney",
          href: "https://matheonyx.github.io/Nesdy/Toy%20Story%204.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/702FE7EC12664DF554BA168BC28E057B20057720FC5D7EAC69ABE907A37F43F8/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Fast and Furious",
          href: "https://matheonyx.github.io/Nesdy/fastandfurious1.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/0d/c9/4b/0dc94b05-00e4-8dd0-5c02-2dd5d2775930/pr_source.jpg/738x416.webp"
        },
        {
          title: "2 Fast 2 Furious Fast and Furious",
          href: "https://matheonyx.github.io/Nesdy/fast%20and%20furious%202.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/e3/8a/4a/e38a4a1d-daf4-9bf9-b6f3-a4789d525235/pr_source.jpg/738x416.webp"
        },
        {
          title: "The Fast and The Furious: Tokyo Drift",
          href: "https://matheonyx.github.io/Nesdy/Fast%20and%20furious%203.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/60/91/1e/60911ea0-a69e-68e6-4a65-8d99b276c44a/pr_source.jpg/738x416.webp"
        },
        {
          title: "Fast and Furious 4",
          href: "https://matheonyx.github.io/Nesdy/Fast%20and%20furious%204.html",
          imgSrc: "data:image/jpeg;base64,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"
        },
         {
          title: "Fast and Furious 5",
          href: "https://matheonyx.github.io/Nesdy/fast%20and%20furious5.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/7a/d3/99/7ad3995f-fbd4-9cba-0a15-c7505d7ca8e9/pr_source.jpg/738x416.webp"
        },
        {
          title: "Fast and Furious 6",
          href: "https://matheonyx.github.io/Nesdy/Fast%20and%20Furious%206.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/wAC0P7WLIUEejV9P10lLgQ/738x416.webp"
        },
        {
          title: "Fast and Furious 7",
          href: "https://matheonyx.github.io/Nesdy/Fast%20and%20Furious%207.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/OmXOr8ClvwBprAcO91MfbQ/738x416.webp"
        },
        {
          title: "Fast and Furious 8",
          href: "https://matheonyx.github.io/Nesdy/Fast%20and%20furious%208.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/rk4lz1qK9cxVvc8SKeYXdw/738x416.webp"
        },
        {
          title: "Captain Marvel",
          href: "https://matheonyx.github.io/Nesdy/captain%20marvel.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/75EFA1607F7ED1D9B8F2DD2FA9A344FE9470886FEF3BD7D78A5BB72D060D9B58/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Fast and Furious 9",
          href: "https://matheonyx.github.io/Nesdy/Fast%20and%20furious%209.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Video115/v4/d5/fe/30/d5fe3040-6ee9-2f80-528f-e3c9038459b3/FastFurious9_3840x2160_fr_fra_keyart_full_digital_artwork_RGB_V1_sprk.lsr/738x416.webp"
        },
        {
          title: "Fast and Furious X",
          href: "https://matheonyx.github.io/Nesdy/fast%20x.html",
          imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Cv81bsPnw7WCv8SYZF6iaA/738x416.webp"
        },
        {
          title: "Black Widow",
          href: "https://matheonyx.github.io/Nesdy/Black%20Widow",
          imgSrc: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v1/variant/disney/f2beecb2-cf45-4e75-9197-e74b16bc3add?/scale?width=1200&aspectRatio=1.78&format=webp"
        },
         {
          title: "Echo Marvel Series",
          href: "https://matheonyx.github.io/Nesdy/echo.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/95E4A6493833AC585EB7861A7C254002A9CCD38B6847EC7349B4AEFDCDE15AA8/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Loki Marvel Series",
          href: "https://matheonyx.github.io/Nesdy/Loki",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B99CDCF9F5FFA8E982E5D46526543600B8C828FE4C20E3D02F4C4AF21A90E628/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Daredevil",
          href: "file:///D:/Disney++/app/Daredevil.html",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F40C1004C9FD24D872D5CF7238DEAB35826A2B103D286E3F2A992AB8A5E2C495/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Lilo et Stitch Disney Live Action",
          href: "https://matheonyx.github.io/Nesdy/Lilo%20et%20Stitch%20Live%20Action%20p",
          imgSrc: "https://cdn.glitch.global/b5e38bca-811c-495c-aa28-c13540ae7e7b/Lilo%20et%20Stitch.png?v=1747854340076"
        },
        {
          title: "Rio",
          href: "https://matheonyx.github.io/Nesdy/Rio",
          imgSrc: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6DFCAFD48557998FCC01344D53A8BFDAD710E6F85D828813F60185B97944F360/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
          title: "Thunderbolts* Marvel",
          href: "https://matheonyx.github.io/Nesdy/thunderbolt.html",
          imgSrc: "https://cdn.glitch.global/aba06776-3d00-4213-9643-021321905a51/thunderbolt.png?v=1746222773518"
        },
    
    
    
  
    
    
    
    
    
    
      
    
    
    
    
    
    // ... (Autres films)
  ];
  // Lors du clic sur le bouton de recherche, on affiche le champ ET l'overlay gris
  searchBtn.addEventListener("click", function() {
    champRecherche.classList.toggle("show");
    champRecherche.focus();
    fondNoir.classList.toggle("active"); // Active/désactive l'overlay gris
  });
  // À chaque saisie, on filtre les films selon le texte entré...
  champRecherche.addEventListener("input", function() {
    const query = champRecherche.value.toLowerCase();
    resultatRecherche.innerHTML = "";
    // On ne fait rien si la barre de recherche est vide
    if (query === "") {
      return;
    }
    // On récupère les films dont le titre contient la chaîne recherchée
    let filteredFilms = films.filter(film =>
      film.title.toLowerCase().includes(query)
    );
    // Toujours ajouter une carte "Angry Birds" avec l'image grise (pour centrer/tricher)
    const angryBirdsCard = {
      href: "https://magnetic-lowly-sodalite.glitch.me/Angry%20Birds.html",
      imgSrc: "https://cdn.glitch.global/dec50b52-1fc2-417a-80a4-dfe25959cc90/gris%200f0f0f.png?v=1731766678615",
      title: "Angry Birds"
    };
    if (!filteredFilms.some(film => film.title.toLowerCase() === "angry birds")) {
      filteredFilms.push(angryBirdsCard);
    }
    // Afficher tous les films filtrés
    filteredFilms.forEach(film => {
      addResult(film.href, film.imgSrc, film.title);
    });
  });
  // Au clic sur l'overlay gris, on masque le champ de recherche et l'overlay
  fondNoir.addEventListener("click", function() {
    champRecherche.classList.remove("show");
    fondNoir.classList.remove("active");
  });
  // Fonction d'ajout d'un résultat dans le conteneur
  function addResult(href, imgSrc, altText) {
    const link = document.createElement("a");
    link.href = href;
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = altText;
    img.className = "resultat-item";
    link.appendChild(img);
    resultatRecherche.appendChild(link);
  }
});
// --- Partie Particules (inchangée) ---
function createParticle(color) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.backgroundColor = color;
  particle.style.top = `${Math.random() * 100}px`;
  particle.style.left = `${Math.random() * 100}px`;
  document.getElementById('particle-container').appendChild(particle);
  setTimeout(() => {
    particle.remove();
  }, 3000);
}
setInterval(() => {
  createParticle('#0014c8');
  createParticle('#0014c8');
}, 500);
// --- Gestion de l'animation du rectangle d'autres titres ---
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('champRecherche');
  const autresTitres = document.getElementById('autresTitres');
  const afficherRectangle = () => {
    autresTitres.style.visibility = 'visible';
    autresTitres.style.opacity = '1';
    autresTitres.style.transform = 'translateY(0)';
  };
  const masquerRectangle = () => {
    autresTitres.style.transform = 'translateY(-550px)';
    autresTitres.style.opacity = '0';
    setTimeout(() => {
      autresTitres.style.visibility = 'hidden';
    }, 300);
  };
  searchInput.addEventListener('focus', afficherRectangle);
  searchInput.addEventListener('blur', masquerRectangle);
});
