\c anime_dev


INSERT INTO animes (title, description, image, YT_embedid, is_validated_seeded)
VALUES(
    'So I`m a Spider, So What?',
    'In a world where the battle between Hero and Demon Lord repeated itself time and time again, an enormous space-time spell misfired and hit a certain Japanese high school class on Earth, killing everyone in it. However, guided by what seemed to be a miracle, the students were all reincarnated into that other world',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7Fu9UamHXswBeVXUlQv3DOeU48vd3ougEQ&usqp=CAU',
    'evHGFpyCX40',
    'true'
),
(   'Sword Art Online',
'Plot. In 2022, a virtual reality massively multiplayer online role-playing game (VRMMORPG) called Sword Art Online (SAO) is released. With the NerveGear, a helmet that stimulates the users five senses via their brain, players can experience and control their in-game characters with their minds.',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcqVmDIYMZhz5TwBqnbnYHD0SZv5H-WvO3gg&usqp=CAU',
   'iZPCKU17-a0',
   'true' 
),
(
    'Dragon Ball Z - Super',
    'Six months after the defeat of Majin Buu, The mighty Saiyan Son Goku continues his quest on becoming stronger. With Majin Buu defeated half-a-year prior, peace returns to Earth, where Son Goku (now a radish farmer) and his friends now live peaceful lives.',
    'https://www.themoviedb.org/t/p/w780/yJAOi2n0VYBEXdPI1NXv5FiOcBX.jpg',
    'g1hutfHP2NE',
    'true'
),
(
    'Jojo`s Bizarre Adventure',
    'The story of the Joestar family, who are possessed with intense psychic strength, and the adventures each member encounters throughout their lives. ... Beginning in 1880, Part I follows Jonathan Joestar as he matures with and eventually combats his adoptive brother, the cunning, merciless Dio Brando.
',
    'https://shoptrends.com/pub/media/catalog/product/cache/8c01c332ca8fc596e6b515a82e5be04e/p/o/poster18708-1.jpg',
    'sM0Q5AuoKYY',
    'true'
),
(
   'Hunter X Hunter',
   'The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLBjqKXVT4TT6CFsBS5Othqs2Av_GE7mXduA&usqp=CAU',
    'uQwg1PeHqxE',
    'true'
),
(
    'Attack on Titan',
    'Eren Yeager is determined to help save humanity when titans re-appear and being to feast on human flesh.',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNCVwUe44kiB6DWLKnVNEVmfFqy2113uN4A&usqp=CAU',
    'S1L2fWm0wnw',
    'true'
),
(
    'Tokyo Revengers',
    'Takemichi Hanagakis life is at an all-time low. Just when he thought it couldnt get worse, he finds out that Hinata Tachibana, his ex-girlfriend, was murdered by the Tokyo Manji Gang: a group of vicious criminals that has been disturbing societys peace for quite some time.',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHlJfXrpuuPqi_DZZjRfs6jLvex76tAy8aJw&usqp=CAU',
    'uU5iDkFUHdU',
    'true'
),
(
    'Tokyo Goul',
    'A college student is attacked by a ghoul, a being that feeds on human flesh. He later receives an organ transplant from the ghoul, becoming part monster himself.',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXlkzAcqjxKcAClgU9JT-NvN8Go1RVxN_ew&usqp=CAU',
    '8Y6CLc_raH0',
    'true'
),
(
    'My Hero Academia',
    'The series focuses on a middle school student Izuku Midoriya, who has no superpowers. ... Academies across the globe train their students to learn to fight crime with their powers. Izuku Midoriya, a boy born without any powers, dreams of being able to become a super hero too, but gets bullied for his unrealistic dreams.',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaI8zbmAiv0IJGpz17fPgLgqTg-cz7FvjAAg&usqp=CAU',
    'Tyhcn-aZ76k',
    'true'
),
(
    'Demon Slayer',
    'A boy raised by boars, who wears a boars head, boards the Infinity Train on a new mission with the Flame Pillar along with another boy who reveals his true power when he sleeps. Their mission is to defeat a demon who has been tormenting people and killing the demon slayers who oppose it.',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMlYD8IS_tXivbru16YfMCCCP1IiNQ-IzJw&usqp=CAU',
    '-0PutKYBXSk',
    'true'
);



INSERT INTO characters (anime_id, name, summary, race, evolution, common_attack, quote, image, is_validated_seeded)
VALUES(
    1,
    'Kumoko',
    '"Kumoko" is the nameless main protagonist of So Im a Spider, So What? She is reincarnated in another world in the body of a Small Lesser Taratect, a weak monster, in the largest, most dangerous dungeon known to man: the Great Elroe Labyrinth."',
    'Arachne',
    'Infinite',
    'Heretic Magic',
    'Nai Wa~~',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BSZ09n2bcZn4T3QaY6_7I4vCC7rtvDrcRw&usqp=CAU',
    'true'
),
(
    1,
    'Shiraori',
    'Shiraori (白織), more commonly known as Shiro (白) or White, is the mysterious commander of the Tenth Demon Army and Administrator Ds object of interest. During her debut, she is presented as a highly suspicious individual who rarely talks and was powerful enough to kill the previous Hero, Julius, and his entire party instantly.',

'Demon',
'none',
'Immortality & Regeneration',
'none',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfeY3KPdYETKopB9EKuLB5WZwNx9b37NezTw&usqp=CAU',
'true'
),
(
    1,
    'Ariel',
    'Ariel is the Origin Taratect, the progenitor of the entire Taratect species, as well as the current Demon Lord. Initially acting as a major antagonist in both the main storyline and prolepsis, trying to kill Kumoko in the former and instigating The Great Human-Demon War in the latter, she later becomes one of the main characters of the main story.
',
'Demon',
'none',
'Abyss Magic',
'none',
'data:image/jpeg;base64,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',
'true'
),
(
    2,
    'Kirito',
    '...pending',
'Human',
'99',
'Dual Wielding',
'Everybody Can Fight. It’s Just A Choice Of Whether You Should',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwH8Or3F-BdNML-oOFt2vTDFV5itl4bqqL8A&usqp=CAU',
'true'
),
(
    2,
    'Eugeo',
'...pending',
'NPC',
'Infinity',
'Aincrad style',
'Kirito . . . teach me how to use a sword.',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbHdbkux83Dp6DZMKIgewrUOmDMM4LxATUA&usqp=CAU',
'true'
),
(
    3,
    'Vegeta',
    '...pending',
    'Prince of all Saiyans',
    'Infinity',
    'Galick Gun',
    'Death by a God of Death, this may be a proud moment.',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxYPQMfpbfwO9XWuYMjZVZepP6Nm8IV0QKEg&usqp=CAU',
    'true'

),
(
    4,
    'Jotaro Kujo',
    '...pending',
    'Human',
    'None',
    'Time Stop',
    'Ora ora ora!',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlbhY6BbjwvtHoz956DKj5719Y6MEuw9B3Jg&usqp=CAU',
    'true'
),
(
    5,
    'Killua Zoldyck',
    '...pending',
    'Human',
    '1',
    'Muscle and Joint Control',
    'I`m so tired of killing... I just want to be a kid. Hanging out, doing stuff with Gon. That`s it',
    'https://static.wikia.nocookie.net/hunterxhunter/images/7/7c/Killua-2011.png/revision/latest/scale-to-width-down/190?cb=20120115021804',
    'true'
);
-- (),(),(),(),(),(),(),(),(),(),(),();

INSERT INTO comments (anime_id,commentor,title,comment )
VALUES(
    6,
    'Malachi',
    'mild gore',
    'Very dark and gory anime. This is not safe for young children. But if your child is mature he/she can handle it'
),
(
    7,
    'Quisa',
    'Weird show',
    'This show is soo weird. OMG'
),
(
    1,
    'anime freak',
    'Very cute characters',
    'This is a video game based anime. Lots of cute characters. There is fighting so I will not say its okay for small children. But if your youngster is 11+ I say its should be safe for them to watch'
);

INSERT INTO users ( name , email, username, password, img, quote)
VALUES(
    'Benjamin Sussman',
    'benjaminsussman@gmail.com',
    'Benno',
    'Access',
    'https://ca.slack-edge.com/TCVA3PF24-UHT9A7X0D-g6f99f28d179-72',
    -- 'https://lh3.googleusercontent.com/a-/AOh14Gj2MPWSew9w2KROCzo3uXTP5543GqTBJyo02DI5=s48',
    '"This is the basics. I expect you to know how to do the basics"'

),
(
    'Quisa Hines',
    'Dequisas@gmail.com',
    'Quisa',
    'Access',
    'https://ca.slack-edge.com/TCVA3PF24-U01FLQ8R9HP-bb553d46ad53-512',
    'uh huh, I understand.'
);

INSERT INTO  authSession ( user_id, expiration_date)
VALUES(
    '1',
    'Sept-15-2022'
),
 (
    '2',
    'Sept-15-2022'
);