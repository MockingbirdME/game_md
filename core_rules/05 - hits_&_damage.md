# Hits & Damage

### Hitting and getting hit:
Most attacks are made as a melee or ranged combat skill check compared to the opponent’s defense.
* Miss: if the attack result is less than the defender’s current defense it has no effect.
* Blocked/parried/dodged: if the attack result is at least equal to the opponent's current defense before but not after their melee/ranged defense bonus the attack is avoided but the defender loses one defense.
* Hit: an attack result that equals or exceeds the target’s modified defense hits. The target loses two defense and suffers the effects of the attack.
* Additional successes: for every three points an attack’s result exceeded the target’s defense it gains an additional success that may be spent for melee attacks to choose a hit location (1 for body, 2 for arm or legs, 3 for head) or for any attack to gain the bonus effects from the weapon or attack type used.

### Targeting objects or hexes:
When making an attack there are times that the target is not another character but an object or map hex.
* Targeting a stationary object: a stationary object has a effective defense value of 12 - it's size.
* Targeting a carried object: targeting an object that is carried or worn by another character requires a successful hit against the character with enough extra successes to target the body location that is carrying/wearing the item plus 1-3 additional successes depending on the size of the object. If the role is enough to hit the character but not the aimed for body location the attack misses, if the attack is enough to hit the location but not the object the attack damages the location as if it was the target with no extra successes to the damage.
* Targeting an hex on the map: to successfully hit a single hex on the map with a melee weapon has a difficulty of 5, targeting a hex with a ranged weapon has a difficulty of 10 for close range +5 for each range increment. Targeting a hex with a character in it increases the difficulty by 5. Missing a melee attack simply misses, missing a range attack results in a hit in a randomized direction X meters away where X is equal to the amount by which the attack fell short divided by 3 plus 1.

### Areas of Effect
Many items, spells, and abilities cause everything in an area to be effected. These effects generally originate from a hex though sometimes from a character. Any character's aware of the AOE may accept two penalty dice to all actions on their next turn to move a number of meters equal to the greater of their ranks in personal defense or personal movement or spend a advancement point to move a number of meters equal to the sum of their ranks in those skills; add that advancement point to either their personal defense or personal movement skill.  

### Hit locations:
Unless the hit location is already determined roll a d10 to determine it: 1-2 legs, 3 right arm, 4 left arm, 5-9 body and 10 for head. Area effects generally damage the target’s body location and do not require a roll.

### Forms of damage
* Stamina - for every point of stamina damage dealt the victim loses one stamina.
* Stun - when a character suffers a stun they lose one stamina and gain a stun; each stun reduces a character’s max stamina by one. If a character gained a stun last round they suffer a -1 penalty for each stun they have to every skill check they make.
* Fatigue - for each fatigue suffered lose one stamina and gain a point of fatigue; each point of fatigue reduces a character’s max stamina by one.
* Wound - for each wound suffered lose 2 stamina and gain a wound to the hit location. Skill checks gain a penalty die for each wound the character has on the used location and a -1 penalty for each other wound.

### Damage Types
##### Concussive damage
Concussive damage is reduced by the character’s body stat and physical damage resistance.

| Damage | stamina/stun/wound | Damage | stamina/stun/wound
| --- | --- | ---| ---
| 1 | 1 stamina | 10 | 1 wound + 1 stun
| 2 | 2 stamina | 13 | 2 wounds
| 3 | 1 stun | 17 | 3 wounds
| 5 | 2 stuns | 21 | 4 wounds
| 7 | 1 wound | every additional 3 | +1 stamina, 1 stun, 1 wound

##### Penetrating damage
Penetrating damage with armor piercing value less than the target’s armor value becomes concussive. Penetrating damage is reduced by the character’s physical damage resistance.

| Damage | stamina/stun/wound | Damage | stamina/stun/wound |
| --- | --- | ---| --- |
| 0 | 1 stamina | 7 | 2 wounds |
| 1 | 1 stun | 10 | 3 wounds |
| 2 | 2 stuns | 13 | 5 wounds |
| 4 | 1 wound | every additional | +1 wound |

##### Fire damage
Fire damage is reduced by any fire resistance the character may have. Fire damage causes burning; the character suffers the same damage -1 next round to the burning body location, if this damage was itself caused by burning randomly determined one adjacent body location to also suffer this damage next round; if a body location would suffer multiple instances of burning only resolve the most severe one. Any character with one hand free within one meter of a burning character may take an action, with a one turn requirement, to reduce all burning damage they would suffer next round by 3, this reduction is increased to 5 if the burning character is prone; a character with two free hands may double this reduction.

|Damage | stamina/stun/wound | Damage | stamina/stun/wound
| --- | --- | ---| ---
| 1 | 1 stamina | 8 | 1 wound, burning
| 3 | 1 stun | 13 | 2 wounds, burning
| 5 | 1 stun, burning | every additional 5 | +1 wound, burning|

##### Cold damage
Cold damage is reduced by a character’s body stat plus any cold resistance they may have. Cold damage gains +1 for every round the target has suffered cold damage since they were last warm.

| Damage | stamina/stun/wound | Damage | stamina/stun/wound
| --- | --- | ---| ---
|1 | 1 stamina | 13 | 2 fatigue, 1 wound
| 3 | 2 stamina | 17 | 3 fatigue, 1 wound
| 5 | 1 fatigue | 21 | 4 fatigue, 2 wounds
| 8 | 2 fatigue | every additional 3 | +1 fatigue, +1/2 wound

<div class="page-break"></div>

##### Lightning damage
Lightning damage is reduced by the character’s body, armor value that is gained from metal armor, and by any lightning resistance they may have. Lightning damage is always inflicted to the body location.

| Damage | stamina/stun/wound | Damage | stamina/stun/wound
| --- | --- | ---| ---
| 0 or less | recovers 1 stamina | 8 | 3 stuns
| 1 | 1 stamina | 10 | 3 stuns,  wound
| 2 | 1 stun | Every additional 3 | +1 stun
| 5 | 2 stuns | every additional 10| +1 wound

##### Arcane Dues
A character suffers a number of points of arcane dues equal to the total number of successes in an effect the mage casts or creates. Arcane dues is handled in three steps, first reduce the dues by up to the character’s body stat lose a stamina per point reduced, then reduce the remainder by up to the character’s body stat taking one fatigue per point reduced, finally take a number of wounds equal to the remaining points to the character’s body location.
