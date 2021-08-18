//w - weaponeventwish
//ws - weaponeventwish and standard
var weapons = [
[1000, '', '', '','', '', '', '', '', , , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1001, 'Summit Shaper', 'Gipfelbrecher', 'Кромсатель пиков','Weapon_Summit_Shaper.png', 'Weapon_Summit_Shaper_2nd.png', 'sword', 'w', 5, 46, 122, 153, 235, 266, 308, 340, 382, 414, 457, 488, 532, 563, 608, 'ATK', 10.8, 19.1, 19.1, 27.8, 27.8, 32.2, 32.2, 36.5, 36.5, 40.9, 40.9, 45.3, 45.3, 49.6,'Increases Shield Strength by <b>20/25/30/35/40%</b>. Scoring hits on opponents increases ATK by <b>4/5/6/7/8%</b> for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield, this ATK increase effect is increased by 100%.'],
[1002, 'The Unforged', 'Grobes Schwert', 'Некованый','Weapon_The_Unforged.png', 'Weapon_The_Unforged_2nd.png', 'claymore', 'w', 5, 46, 122, 153, 235, 266, 308, 340, 382, 414, 457, 488, 532, 563, 608, 'ATK', 10.8, 19.1, 19.1, 27.8, 27.8, 32.2, 32.2, 36.5, 36.5, 40.9, 40.9, 45.3, 45.3, 49.6,'Increases Shield Strength by <b>20/25/30/35/40%</b>, scoring hits on opponents increases ATK by <b>4/5/6/7/8%</b> for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield this ATK increase effect is increased by 100%.'],
[1003, 'Vortex Vanquisher', 'Regenbogenstecher', 'Покоритель вихря', 'Weapon_Vortex_Vanquisher.png', 'Weapon_Vortex_Vanquisher_2nd.png', 'polearm', 'w', 5, 46, 122, 153, 235, 266, 308, 340, 382, 414, 457, 488, 532, 563, 608, 'ATK', 10.8, 19.1, 19.1, 27.8, 27.8, 32.2, 32.2, 36.5, 36.5, 40.9, 40.9, 45.3, 45.3, 49.6,'Increases Shield Strength by <b>20/25/30/35/40%</b>. Scoring hits on opponents increases ATK by <b>4/5/6/7/8%</b> for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield, this ATK increase effect is increased by 100%.'],
[1004, 'Memory of Dust', 'Ketten des Diesseits', 'Память о пыли','Weapon_Memory_of_Dust.png', 'Weapon_Memory_of_Dust_2nd.png', 'catalyst', 'w', 5, 46, 122, 153, 235, 266, 308, 340, 382, 414, 457, 488, 532, 563, 608, 'ATK', 10.8, 19.1, 19.1, 27.8, 27.8, 32.2, 32.2, 36.5, 36.5, 40.9, 40.9, 45.3, 45.3, 49.6,'Increases Shield Strength by <b>20/25/30/35/40%</b>. Scoring hits on opponents increases ATK by <b>4/5/6/7/8%</b> for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield, this ATK increase effect is increased by 100%.'],
[1005, '', '', '','', '', 'bow', '', , , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1006, 'Skyward Blade', 'Himmelsklinge', 'Небесный меч','Weapon_Skyward_Blade.png', 'Weapon_Skyward_Blade_2nd.png', 'sword', 'ws', 5, 46, 122, 153, 235, 266, 308, 340, 382, 414, 457, 488, 532, 563, 608, 'ER', 12, 21.2, 21.2, 30.9, 30.9, 35.7, 35.7, 40.6, 40.6, 45.4, 45.4, 50.3, 50.3, 55.1,'Crit Rate increased by <b>4/5/6/7/8%</b>. Gains Skypiercing Might upon using Elemental Burst: Increases Movement SPD by 10%, increases ATK SPD by 10%, and increases the DMG of Normal and Charged Attack hits by <b>20/25/30/35/40%</b> for 12s.'],
[1007, 'Skyward Pride', 'Stolz des Himmels', 'Небесное величие','Weapon_Skyward_Pride.png', 'Weapon_Skyward_Pride_2nd.png', 'claymore', 'ws', 5, 48, 133, 164, 261, 292, 341, 373, 423, 455, 506, 537, 590, 621, 674, 'ER', 8, 14.1, 14.1, 20.6, 20.6, 23.8, 23.8, 27.1, 27.1, 30.3, 30.3, 33.5, 33.5, 36.8,'Increases all DMG by <b>8/10/12/14/16%</b>. After using an Elemental Burst, Normal or Charged Attack, on hit, creates a vacuum blade that does <b>80/100/120/140/160%</b> of ATK as DMG to enemies along its path. Lasts for 20s or 8 vacuum blades.'],
[1008, 'Skyward Spine', 'Himmelsgrat', 'Небесная ось','Weapon_Skyward_Spine.png', 'Weapon_Skyward_Spine_2nd.png', 'polearm', 'ws', 5, 48, 133, 164, 261, 292, 341, 373, 423, 455, 506, 537, 590, 621, 674, 'ER', 8, 14.1, 14.1, 20.6, 20.6, 23.8, 23.8, 27.1, 27.1, 30.3, 30.3, 33.5, 33.5, 36.8,'Increases CRIT Rate by <b>8/10/12/14/16%</b> and increases Normal ATK SPD by 12%. Additionally, Normal and Charged Attacks hits on enemies have a 50% chance to trigger a vaccuum blade that deals <b>40/55/70/85/100%</b> of ATK as DMG in a small AoE. This effect can occur no more than once every 2s.'],
[1009, 'Skyward Atlas', 'Himmelsatlas', 'Небесный атлас','Weapon_Skyward_Atlas.png', 'Weapon_Skyward_Atlas_2nd.png', 'catalyst', 'ws', 5, 48, 133, 164, 261, 292, 341, 373, 423, 455, 506, 537, 590, 621, 674, 'ATK', 7.2, 12.7, 12.7, 18.5, 18.5, 21.4, 21.4, 24.4, 24.4, 27.3, 27.3, 30.2, 30.2, 33.1,'Increases Elemental DMG Bonus by <b>12/15/18/21/24%</b>. Normal Attack hits have a 50% chance to earn the favor of the clouds. which actively seek out nearby enemies to attack for 15s, dealing <b>160/200/240/280/320%</b> ATK DMG. Can only occur once every 30s.'],
[1010, 'Skyward Harp', 'Himmelsflügel', 'Небесное крыло','Weapon_Skyward_Harp.png', 'Weapon_Skyward_Harp_2nd.png', 'bow', 'ws', 5,48, 133, 164, 261, 292, 341, 373, 423, 455, 506, 537, 590, 621, 674, 'Crit R', 4.8, 8.5, 8.5, 12.4, 12.4, 14.3, 14.3, 16.2, 16.2, 18.2, 18.2, 20.1, 20.1, 22.1, '	Increases CRIT DMG by <b>20/25/30/35/40%</b>. Hits have a <b>60/70/80/90/100%</b> chance to inflict a small AoE attack, dealing 125% Physical ATK DMG. Can only occur once every <b>4/3.5/3/2.5/2s</b>.'],
[1011, 'Primordial Jade Cutter', 'Moosgrüner Fels', 'Драгоценный омут','Weapon_Primordial_Jade_Cutter.png', 'Weapon_Primordial_Jade_Cutter_2nd.png', 'sword', 'w', 5, 44, 110, 141, 210, 241, 275, 307, 341, 373, 408, 439, 475, 506, 542, 'Crit R', 9.6, 17, 17, 24.7, 24.7, 28.6, 28.6, 32.5, 32.5, 36.4, 36.4, 40.2, 40.2, 44.1,'HP increased by <b>20/25/30/35/40%</b>. Additionally, provides an ATK bonus based on <b>1.2/1.5/1.8/2.1/2.4%</b> of the wielder\'s max HP.'],
[1012, '', '', '','', '', 'claymore', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1013, 'Primordial Jade Winged Spear', 'Urzeitlicher Jadespeer', 'Нефритовый коршун','Weapon_Primordial_Jade_Winged-Spear.png', 'Weapon_Primordial_Jade_Winged-Spear_2nd.png', 'polearm', 'ws', 5, 48, 133, 164, 261, 292, 341, 373, 423, 455, 506, 537, 590, 621, 674, 'CritR', 4.8, 8.5, 8.5, 12.4, 12.4, 14.3, 14.3, 16.2, 16.2, 18.2, 18.2, 20.1, 20.1, 22.1,'On hit, increases ATK by <b>3.2/3.9/4.6/5.3/6.0%</b> for 6s. Max 7 stacks. This effect can only occur once ever 0.3s. While in possession of the maximum possible stacks, DMG dealt is increased by <b>12/15/18/21/24%</b>.'],
[1014, '', '', '','', '', 'catalyst', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1015, '', '', '','', '', 'bow', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1016, 'Freedom-Sworn', 'Blasser Schwur der Freiheit', 'Клятва свободы','Weapon_Freedom-Sworn.png', 'Weapon_Freedom-Sworn_2nd.png', 'sword', 'w', 5, 46, 122, 153, 235, 266, 308, 340, 382, 414, 457, 488, 532, 563, 608, 'EM', 43, 76, 76, 111, 111, 129, 129, 146, 146, 164, 164, 181, 181, 198,'A part of the "Millenial Movement" that wanders amidst the winds. Increases DMG by <b>10/12.5/15/17.5/20%.</b> When the character wielding this weapon triggers Elemental Reactions, they gain a Sigil of Rebellion. This effect can be triggered once every 0.5s and can be triggered even if said character is not on the field.When you possess 2 Sigils of Rebellion, all of them will be consumed and all nearby party members will obtain "Millennial Movement: Song of Resistance" for 12s. "Millennial Movement: Song of Resistance" increases Normal, Charged and Plunging Attack DMG by <b>16/20/24/28/32%</b> and increases ATK by <b>20/25/30/35/40%</b>. Once this effect is triggered, you will not gain Sigils of Rebellion for 20s.Of the many effects of the "Millennial Movement," buffs of the same type will not stack.'],
[1017, 'Song of Broken Pines', 'Kiefernklang', 'Песнь разбитых сосен','Weapon_Song_of_Broken_Pines.png', 'Weapon_Song_of_Broken_Pines_2nd.png', 'claymore', 'w', 5, 49, 145, 176, 286, 317, 374, 406, 464, 495, 555, 586, 648, 679, 741, 'Phys', 4.5, 8.0, 8.0, 11.6, 11.6, 13.4, 13.4, 15.2, 15.2, 17, 17, 18.9, 18.9, 20.7,'A part of the "Millennial Movement" that wanders amidst the winds. Increases ATK by <b>16/20/24/28/32%</b>, and when Normal or Charged Attacks hit opponents, the character gains a Sigil of Whispers. This effect can be triggered once every 0.3s. When you possess four Sigils of Whispers, all of them will be consumed and all nearby party members will obtain the "Millennial Movement: Banner-Hymn" effect for 12s. "Millennial Movement: Banner-Hymn" increases Normal ATK SPD by <b>12/15/18/21/24%</b> and increases ATK by <b>20/25/30/35/40%</b>. Once this effect is triggered, you will not gain Sigils of Whispers for 20s. Of the many effects of the "Millennial Movement, " buffs of the same type will not stack.'],
[1018, '', '', '','', '', 'polearm', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1019, '', '', '','', '', 'catalyst', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1020, 'Elegy for the End', 'Letzter Seufzer', 'Элегия погибели','Weapon_Elegy_for_the_End.png', 'Weapon_Elegy_for_the_End_2nd.png', 'bow', 'w', 5, 46, 122, 153, 235, 266, 308, 340, 382, 414, 457, 488, 532, 563, 608, 'ER', 12, 21.2, 21.2, 30.9, 30.9, 35.7, 35.7, 40.6, 40.6, 45.4, 45.4, 50.3, 50.3, 55.1, 'A part of the "Millennial Movement" that wanders amidst the winds. Increases Elemental Mastery by <b>60/75/90/105/120</b>. When the Elemental Skills or Elemental Bursts of the character wielding this weapon hit opponents, that character gains a Sigil of Remembrance. This effect can be triggered once every 0.2s and can be triggered even if said character is not on the field. When you possess 4 Sigils of Remembrance, all of them will be consumed and all nearby party members will obtain the "Millennial Movement: Farewell Song" effect for 12s. "Millennial Movement: Farewell Song" increases Elemental Mastery by <b>100/125/150/175/200</b> and increases ATK by <b>20/25/30/35/40%</b>. Once this effect is triggered, you will not gain Sigils of Remembrance for 20s. Of the many effects of the "Millennial Movement," buffs of the same type will not stack.'],
[1021, 'Aquila Favonia', 'Windfalke', 'Меч Сокола','Weapon_Aquila_Favonia.png', 'Weapon_Aquila_Favonia_2nd.png', 'sword', 'ws', 5, 48, 133, 164, 261, 292, 341, 373, 423, 455, 506, 537, 590, 621, 674, 'Phys', 9, 15.9, 15.9, 23.2, 23.2, 26.8, 26.8, 30.4, 30.4, 34.1, 34.1, 37.7, 37.7, 41.3,'ATK is increased by <b>20/25/30/35/40%</b>. Triggers on taking DMG: the soul of the Falcon of the West awakens, holding the banner of the resistance aloft, regenerating HP equal to <b>100/115/130/145/160%</b> of ATK and dealing <b>200/230/260/290/320%</b> of ATK as DMG to surrounding enemies. This effect can only occur once every 15s.'],
[1022, 'Wolf\'s Gravestone', 'Wolfsgrab', 'Волчья погибель','Weapon_Wolf\'s_Gravestone.png', 'Weapon_Wolf\'s_Gravestone_2nd.png', 'claymore', 'ws', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1023, 'Staff of Homa', 'Homa-Stab', 'Посох Хомы','Weapon_Staff_of_Homa.png', 'Weapon_Staff_of_Homa_2nd.png', 'polearm', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1024, 'Lost Prayer to the Sacred Winds', 'Gebete der Vier Winde', 'Молитва святым','Weapon_Lost_Prayer_to_the_Sacred_Winds.png', 'Weapon_Lost_Prayer_to_the_Sacred_Winds_2nd.png', 'catalyst', 'ws', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1025, 'Amos\' Bow', 'Amos\' Bogen', 'Лук Амоса','Weapon_Amos\'_Bow.png', 'Weapon_Amos\'_Bow_2nd.png', 'bow', 'ws', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],

[1026, '', '', '','', '', 'sword', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1027, '', '', '','', '', 'claymore', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1028, '', '', '','', '', 'polearm', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1029, '', '', '','', '', 'catalyst', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1030, 'Electro Bow', '', '','', '', 'bow', 'w', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1031, '', '', '','', '', 'sword', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1032, '', '', '','', '', 'claymore', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1033, '', '', '','', '', 'polearm', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1034, '', '', '','', '', 'catalyst', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1035, '', '', '','', '', 'bow', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1036, '', '', '','', '', 'sword', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1037, '', '', '','', '', 'claymore', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1038, '', '', '','', '', 'polearm', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1039, '', '', '','', '', 'catalyst', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1040, '', '', '','', '', 'bow', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1041, '', '', '','', '', 'sword', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1042, '', '', '','', '', 'claymore', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1043, '', '', '','', '', 'polearm', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1044, '', '', '','', '', 'catalyst', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1045, '', '', '','', '', 'bow', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1046, '', '', '','', '', 'sword', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1047, '', '', '','', '', 'claymore', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1048, '', '', '','', '', 'polearm', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1049, '', '', '','', '', 'catalyst', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1050, '', '', '','', '', 'bow', '', 5, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1051],[1052],[1053],[1054],[1055],[1056],[1057],[1058],[1059],[1060],
[1061],[1062],[1063],[1064],[1065],[1066],[1067],[1068],[1069],[1070],
[1071],[1072],[1073],[1074],[1075],[1076],[1077],[1078],[1079],[1080],
[1081],[1082],[1083],[1084],[1085],[1086],[1087],[1088],[1089],[1090],
[1091],[1092],[1093],[1094],[1095],[1096],[1097],[1098],[1099],[1100],
[1101, 'The Alley Flash', 'Gassenleuchte', 'Вспышка во тьме','', '', 'sword', 'w', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1102, '', '', '','', '', 'claymore', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1103, '', '', '','', '', 'polearm', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1104, 'Wine and Song', 'Wein und Gesang in den Gassen', 'Вино и песни','', '', 'catalyst', 'w', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1105, 'Alley Hunter', 'Gassenjäger', 'Охотник во тьме','', '', 'bow', 'w', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1106, 'Lion\'s Roar', 'Drachenschrei', 'Драконый рык','', '', 'sword', 'ws', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1107, 'Rainslasher', 'Regenschnitter', 'Дождерез','', '', 'claymore', 'ws', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1108, 'Dragon\'s Bane', 'Drachenschreck', 'Гроза драконов','', '', 'polearm', 'ws', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1109, '', '', '','', '', 'catalyst', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1110, '', '', '','', '', 'bow', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1111, 'The Black Sword', 'Schwarzes Schwert', 'Чёрный меч','', '', 'sword', 'bp', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1112, 'Serpent Spine', 'Knochenschwert	', 'Меч драконьей кости','', '', 'claymore', 'bp', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1113, 'Deathmatch', 'Duelllanze', 'Смертельный бой','', '', 'polearm', 'bp', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1114, 'Solar Pearl', 'Sonne und Mond', 'Солнечная жемчужина','', '', 'catalyst', 'bp', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1115, 'The Viridescent Hunt', 'Grasgrüner Jagdbogen', 'Зелёный лук','', '', 'bow', 'bp', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1116, 'Blackcliff Longsword', 'Schwarzstein-Langschwert', 'Черногорский длинный меч','', '', 'sword', 'sh', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1117, 'Blackcliff Slasher', 'Schwarzstein-Schneide', 'Черногорская бритва','', '', 'claymore', 'sh', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1118, 'Blackcliff Pole', 'Schwarzsteinlanze', 'Черногорская пика','', '', 'polearm', 'sh', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1119, 'Blackcliff Agate', 'Schwarzstein-Achat', 'Черногорский агат','', '', 'catalyst', 'sh', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1120, 'Blackcliff Warbow', 'Schwarzstein-Kriegsbogen', 'Черногорский боевой лук','', '', 'bow', 'sh', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1121, '', '', '','', '', 'sword', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1122, 'Snow Tombed Starsilver', 'Unter Schnee begrabenes Sternsilber', 'Заснеженное звёздное серебро','', '', 'claymore', 'craft', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1123, 'Dragonspine Spear', 'Drachengratspeer', 'Копьё Драконьего хребта','', '', 'polearm', 'craft', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1124, 'Frostbearer', 'Permafrostfrucht', 'Плод вечной мерзлоты','', '', 'catalyst', 'craft', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1125, '', '', '','', '', 'bow', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1126, 'Festering Desire', 'Schwert der Verderbnis', 'Осквернённое желание','', '', 'sword', 'event', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1127, '', '', '','', '', 'claymore', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1128, '', '', '','', '', 'polearm', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1129, 'Dodoco Tales', 'Dodoco-Geschichten', 'Истории Додоко','', '', 'catalyst', 'event', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1130, 'Windblume Ode', 'Windblumenode', 'Ода анемонии','', '', 'bow', 'event', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1131, 'Favonius Sword', 'Favonius-Schwert', 'Меч Фавония','', '', 'sword', 'ws', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1132, 'Favonius Greatsword', 'Favonius-Großschwert', 'Двуручный меч Фавония','', '', 'claymore', 'ws', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1133, 'Favonious Lance', 'Favonius-Lanze', 'Копьё Фавония','', '', 'polearm', 'ws', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1134, 'Favonious Codex', 'Favonious Codex', 'Кодекс Фавония','', '', 'catalyst', 'ws', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1135, 'Favonious Warbow', 'Favonius-Jagdbogen', 'Боевой лук Фавония','', '', 'bow', 'ws', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1136, 'Iron Sting', 'Eisenstich', 'Стальное жало','', '', 'sword', 'craft', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1137, 'Whiteblind', 'Weißer Schatten', 'Белая тень','', '', 'claymore', 'craft', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1138, 'Crescent Pike', 'Mondpike', 'Пика полумесяца','', '', 'polearm', 'craft', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1139, 'Mappa Mare', 'Illustrationen von Landen und Wassern', 'Морской атлас','', '', 'catalyst', 'craft', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1140, 'Compound Bow', 'Compoundbogen', 'Составной лук','', '', 'bow', 'craft', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1141, '', '', '','', '', 'sword', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1142, 'Lithic Blade', 'Antikes Millelithenschwert', 'Каменный меч','', '', 'claymore', 'w', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1143, 'Lithic Spear', 'Millelithenlanze', 'Каменное копьё','', '', 'polearm', 'w', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1144, '', '', '','', '', 'catalyst', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1145, '', '', '','', '', 'bow', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1146, 'Prototype Rancour', 'Steinschneider-Prototyp', 'Прототип: Злоба','', '', 'sword', 'craft', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1147, 'Prototype Archaic', 'Guhua-Prototyp', 'Прототип: Архаичный','', '', 'claymore', 'craft', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1148, 'Prototype Starglitter', 'Sternsichel-Prototyp', 'Прототип: Звёздный блеск','', '', 'polearm', 'craft', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1149, 'Prototype Amber', 'Bernstein-Prototyp', 'Прототип: Янтарь','', '', 'catalyst', 'craft', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1150, 'Prototype Crescent', 'Prototype Crescent', 'Прототип: Полумесяц','', '', 'bow', 'craft', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1151, 'Royal Longsword', 'Königliches Langschwert', 'Меч аристократов','', '', 'sword', 'sh', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1152, 'Royal Greatsword', 'Königliches Großschwert', 'Королевский двуручный меч','', '', 'claymore', 'sh', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1153, 'Royal Spear', 'Königlicher Jagdspeer', 'Королевское копьё','', '', 'polearm', 'sh', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1154, 'Royal Grimoire', 'Königliches Zauberbuch', 'Королевский гримуар','', '', 'catalyst', 'sh', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1155, 'Royal Bow', 'Königlicher Langbogen', 'Королевский лук','', '', 'bow', 'sh', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1156, 'Sacrificial Sword', 'Opferschwert', 'Церемониальный меч','', '', 'sword', 'ws', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1157, 'Sacrificial Greatsword', 'Opfergroßschwert', 'Церемониальный двуручный меч','', '', 'claymore', 'ws', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1158, '', '', '','', '', 'polearm', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1159, 'Sacrificial Fragments', 'Opferrituale', 'Ритуальные мемуары','', '', 'catalyst', 'ws', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1160, 'Sacrificial Bow', 'Opferbogen', 'Церемониальный лук','', '', 'bow', 'ws', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1161, 'The Flute', 'Flöte	', 'Меч-флейта','', '', 'sword', 'ws', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1162, 'The Bell', 'Glocke	', 'Меч-колокол','', '', 'claymore', 'ws', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1163, '', '', '','', '', 'polearm', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1164, 'The Widsith', 'Landstreichernoten', 'Песнь странника','', '', 'catalyst', 'ws', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1165, 'The Stringless', 'Der Sehnenlose', 'Бесструнный','', '', 'bow', 'ws', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1166, '', '', '','', '', 'sword', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1167, '', '', '','', '', 'claymore', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1168, '', '', '','', '', 'polearm', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1169, 'Eye of Perception', 'Herzensblick', 'Око сознания','', '', 'catalyst', 'ws', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1170, 'Rust', 'Rostiger Bogen', 'Ржавый лук','', '', 'bow', 'ws', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1171, '', '', '','', '', 'sword', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1172, '', '', '','', '', 'claymore', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1173, '', '', '','', '', 'polearm', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1174, '', '', '','', '', 'catalyst', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1175, 'Mitternachts Waltz', 'Mitternachtswalzer', 'Вальс Нирваны Ночи','', '', 'bow', 'w', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1176, 'Sword of Descension', 'Schwert der Niederkunft', 'Меч нисхождения','', '', 'sword', 'event', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1177, '', '', '','', '', 'claymore', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1178, '', '', '','', '', 'polearm', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1179, '', '', '','', '', 'catalyst', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1180, '', '', '','', '', 'bow', '', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1181, 'Inasuma', '', '', '', '', 'sword', 'craft', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1182, 'Inasuma', '', '', '', '', 'claymore', 'craft', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1183, 'Inasuma Pike', '', '','', '', 'polearm', 'craft', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1184, 'Inasuma Mare', '', '','', '', 'catalyst', 'craft', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,''],
[1185, 'Inasuma Bow', '', ' ','', '', 'bow', 'craft', 4, , , , , , , , , , , , , , '', , , , , , , , , , , , , , ,'']
]


function tableContent(x){
    var a = document.getElementById("weapontitle"+x);
    var b = document.getElementById("pic"+x); 
    //var c = document.getElementById("pica"+x);         
    //var d = document.getElementById("type"+x);
     var e = document.getElementById("stars"+x);
    //var f = document.getElementById("c"+x);
    var g = document.getElementById("counter"+x);
    var i = document.getElementById("atk"+x);
    var k = document.getElementById("attrname"+x);
    var l = document.getElementById("attr"+x);
    var m = document.getElementById("descr"+x);
    x = x-1000;
    a.innerHTML = '<b>'+weapons[x][1]+'</b>';
    b.innerHTML = '<div class="imgframe"><img src="Pictures/Weapons/'+weapons[x][4]+'" width="90px"><img src="Pictures/Weapons/'+weapons[x][5]+'" width="90px" class = "hidden"></div>';
    //c.innerHTML = '<img src="Pictures/Weapons/'+weapons[x][5]+'" width="90px">';
    //d.innerHTML = weapons[x][6];
    e.innerHTML = '<img src="Pictures/Icon_'+weapons[x][8]+'_Stars.png" width = "73px">'; 
    //f.innerHTML = 
    g.innerHTML = "90";
    i.innerHTML = numberWithSpaces(weapons[x][22]);
    k.innerHTML = '<b>'+weapons[x][23]+':</b>';
    if(k.innerHTML =='<b>EM:</b>'){
        l.innerHTML = weapons[x][37]; 
    }else{
        l.innerHTML = weapons[x][37]+'%'; 
    }
    m.innerHTML = '<div style="overflow:auto; height:182px;" class="descri">'+weapons[x][38]+'</div>';
    
}
function leVelDown(nr) {
    var x = document.getElementById("counter"+nr);
    var z = document.getElementById("atk"+nr);
    var h = document.getElementById("attrname"+nr);
    var b = document.getElementById("attr"+nr);
    nr = nr-1000;
    if (x.innerHTML == "90") {
    x.innerHTML = '80+';   
    z.innerHTML = numberWithSpaces(weapons[nr][21]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][36];
        }else {
        b.innerHTML = weapons[nr][36]+'%'; 
        }
    }else if (x.innerHTML == "80+") {
    x.innerHTML = '80';   
    z.innerHTML = numberWithSpaces(weapons[nr][20]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][35];
        }else {
        b.innerHTML = weapons[nr][35]+'%'; 
        }
    }else if (x.innerHTML == "80") {
    x.innerHTML = '70+';   
    z.innerHTML = numberWithSpaces(weapons[nr][19]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][34];
        }else {
        b.innerHTML = weapons[nr][34]+'%'; 
        }
    }else if (x.innerHTML == "70+") {
    x.innerHTML = '70';   
    z.innerHTML = numberWithSpaces(weapons[nr][18]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][33];
        }else {
        b.innerHTML = weapons[nr][33]+'%'; 
        }
    }else if (x.innerHTML == "70") {
    x.innerHTML = '60+';   
    z.innerHTML = numberWithSpaces(weapons[nr][17]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][32];
        }else {
        b.innerHTML = weapons[nr][32]+'%'; 
        }
    }else if (x.innerHTML == "60+") {
    x.innerHTML = '60';   
    z.innerHTML = numberWithSpaces(weapons[nr][16]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][31];
        }else {
        b.innerHTML = weapons[nr][31]+'%'; 
        }
    }else if (x.innerHTML == "60") {
    x.innerHTML = '50+';   
    z.innerHTML = numberWithSpaces(weapons[nr][15]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][30];
        }else {
        b.innerHTML = weapons[nr][30]+'%'; 
        }
    }else if (x.innerHTML == "50+") {
    x.innerHTML = '50';   
    z.innerHTML = numberWithSpaces(weapons[nr][14]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][29];
        }else {
        b.innerHTML = weapons[nr][29]+'%'; 
        }
    }else if (x.innerHTML == "50") {
    x.innerHTML = '40+';   
    z.innerHTML = numberWithSpaces(weapons[nr][13]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][28];
        }else {
        b.innerHTML = weapons[nr][28]+'%'; 
        }
    }else if (x.innerHTML == "40+") {
    x.innerHTML = '40';   
    z.innerHTML = numberWithSpaces(weapons[nr][12]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][27];
        }else {
        b.innerHTML = weapons[nr][27]+'%'; 
        }
    }else if (x.innerHTML == "40") {
    x.innerHTML = '20+';   
    z.innerHTML = numberWithSpaces(weapons[nr][11]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][26];
        }else {
        b.innerHTML = weapons[nr][26]+'%'; 
        }
    }else if (x.innerHTML == "20+") {
    x.innerHTML = '20';   
    z.innerHTML = numberWithSpaces(weapons[nr][10]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][25];
        }else {
        b.innerHTML = weapons[nr][25]+'%'; 
        }
    }else if (x.innerHTML == "20") {
    x.innerHTML = '1';   
    z.innerHTML = numberWithSpaces(weapons[nr][9]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][24];
        }else {
        b.innerHTML = weapons[nr][24]+'%'; 
        }
    }else if (x.innerHTML == "1") {
    x.innerHTML = '90';   
    z.innerHTML = numberWithSpaces(weapons[nr][22]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][37];
        }else {
        b.innerHTML = weapons[nr][37]+'%'; 
        }
    }else{
    x.innerHTML = '90';   
    z.innerHTML = numberWithSpaces(weapons[nr][22]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][37];
        }else {
        b.innerHTML = weapons[nr][37]+'%'; 
        }               
    }  
}
function leVelUp(nr) {
    var x = document.getElementById("counter"+nr);
    var z = document.getElementById("atk"+nr);
    var h = document.getElementById("attrname"+nr);
    var b = document.getElementById("attr"+nr);
    nr = nr-1000;
    if (x.innerHTML == "80") {
    x.innerHTML = '80+';   
    z.innerHTML = numberWithSpaces(weapons[nr][21]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][36];
        }else {
        b.innerHTML = weapons[nr][36]+'%'; 
        }
    }else if (x.innerHTML == "70+") {
    x.innerHTML = '80';   
    z.innerHTML = numberWithSpaces(weapons[nr][20]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][35];
        }else {
        b.innerHTML = weapons[nr][35]+'%'; 
        }
    }else if (x.innerHTML == "70") {
    x.innerHTML = '70+';   
    z.innerHTML = numberWithSpaces(weapons[nr][19]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][34];
        }else {
        b.innerHTML = weapons[nr][34]+'%'; 
        }
    }else if (x.innerHTML == "60+") {
    x.innerHTML = '70';   
    z.innerHTML = numberWithSpaces(weapons[nr][18]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][33];
        }else {
        b.innerHTML = weapons[nr][33]+'%'; 
        }
    }else if (x.innerHTML == "60") {
    x.innerHTML = '60+';   
    z.innerHTML = numberWithSpaces(weapons[nr][17]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][32];
        }else {
        b.innerHTML = weapons[nr][32]+'%'; 
        }
    }else if (x.innerHTML == "50+") {
    x.innerHTML = '60';   
    z.innerHTML = numberWithSpaces(weapons[nr][16]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][31];
        }else {
        b.innerHTML = weapons[nr][31]+'%'; 
        }
    }else if (x.innerHTML == "50") {
    x.innerHTML = '50+';   
    z.innerHTML = numberWithSpaces(weapons[nr][15]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][30];
        }else {
        b.innerHTML = weapons[nr][30]+'%'; 
        }
    }else if (x.innerHTML == "40+") {
    x.innerHTML = '50';   
    z.innerHTML = numberWithSpaces(weapons[nr][14]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][29];
        }else {
        b.innerHTML = weapons[nr][29]+'%'; 
        }
    }else if (x.innerHTML == "40") {
    x.innerHTML = '40+';   
    z.innerHTML = numberWithSpaces(weapons[nr][13]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][28];
        }else {
        b.innerHTML = weapons[nr][28]+'%'; 
        }
    }else if (x.innerHTML == "20+") {
    x.innerHTML = '40';   
    z.innerHTML = numberWithSpaces(weapons[nr][12]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][27];
        }else {
        b.innerHTML = weapons[nr][27]+'%'; 
        }
    }else if (x.innerHTML == "20") {
    x.innerHTML = '20+';   
    z.innerHTML = numberWithSpaces(weapons[nr][11]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][26];
        }else {
        b.innerHTML = weapons[nr][26]+'%'; 
        }
    }else if (x.innerHTML == "1") {
    x.innerHTML = '20';   
    z.innerHTML = numberWithSpaces(weapons[nr][10]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][25];
        }else {
        b.innerHTML = weapons[nr][25]+'%'; 
        }
    }else if (x.innerHTML == "90") {
    x.innerHTML = '1';   
    z.innerHTML = numberWithSpaces(weapons[nr][9]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][24];
        }else {
        b.innerHTML = weapons[nr][24]+'%'; 
        }
    }else if (x.innerHTML == "80+") {
    x.innerHTML = '90';   
    z.innerHTML = numberWithSpaces(weapons[nr][22]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][37];
        }else {
        b.innerHTML = weapons[nr][37]+'%'; 
        }
    }else{
    x.innerHTML = '90';   
    z.innerHTML = numberWithSpaces(weapons[nr][22]);
        if(h.innerHTML =='<b>EM:</b>'){
        b.innerHTML = weapons[nr][37];
        }else {
        b.innerHTML = weapons[nr][37]+'%'; 
        }               
    }  
}




function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}