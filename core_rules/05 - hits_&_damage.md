# Hits & Damage
<!-- TODO update wording throughout to use hex and add disclaimer that if not using a battle map the term hex correlates to roughly one square meter in theater of the mind -->
## Hitting and getting hit:
Most attacks are made as a melee or ranged combat skill check where the total is compared to the opponent’s defense in order to determine the result of the attack.
* Miss: if the attack result is less than the defender’s current defense the attack simply misses with has no effect.
* Blocked/parried/dodged (_melee only_): if the attack result is at least equal to the opponent's current defense before but not after their melee defense bonus the attack is avoided but the defender loses one defense.
* Hit: an attack result that equals or exceeds the target’s defense with melee/ranged defense bonus hits. The defender loses two defense and suffers the effects of the attack.
* Additional successes: for every three points an attack’s skill check result exceeded the target’s defense it gains an additional success that may be spent to choose a hit location (1 for body, 2 for arm or legs, 3 for head) or for any attack to gain the bonus effects from the weapon or attack type used. <!-- Consider having locations need to be called for ranged attacks. -->

## Targeting objects or hexes:
When making an attack there are times that the target is not another character but an object or an area (like a hex on the battle map if using miniatures).
* Targeting a stationary object: a stationary object has a defense value equal to 12 minus its size.
* Targeting a carried object: targeting an object that is carried or worn by another character requires a successful hit against the character with enough extra successes to target the body location where the item is being carried or worn plus 1-3 additional successes depending on the size of the object (GM's discretion is used to determine how many additional successes are needed to hit the specified location but this information should be made available if a player asks for it before attempting the attack).
* Targeting an area: to successfully hit a single hex on the map, if using a battle map, or roughly a square meter area if not using one with a melee weapon has a difficulty of 5, targeting the same area with a ranged weapon has a difficulty of 10 for close range +5 for each range increment. Targeting a hex with a character in it increases the difficulty by 5.

## Areas of Effect
Many items, spells, and abilities cause everything in an area to be affected. These effects originate from a hex or character. Once per round a character aware of an AOE they will end up in may accept two penalty dice to all actions on their next turn to move a number of meters equal to the greater of their ranks in personal defense and personal movement or spend a advancement point to move a number of meters equal to the sum of their ranks in those skills; add that advancement point to either their personal defense or personal movement skill.

## Hit locations:
Unless the hit location is already determined roll a d10 to determine it: 1-2 legs, 3 right arm, 4 left arm, 5-9 body and 10 for head. Area effects generally damage the target’s body location and do not require a roll.

## Forms of damage
* Stamina - for every point of stamina damage dealt the victim loses one stamina.
* Stun - when a character suffers a stun they lose one stamina and gain a stun; each stun reduces a character’s max stamina by one. If a character gained a stun last round they suffer a -1 penalty for each stun they have to every skill check they make. If a character's max stamina is reduced to zero they are rendered unconscious and any future stuns suffered are treated instead as wounds.
* Fatigue - when a character suffers a point of fatigue they lose one stamina and gain a point of fatigue; each point of fatigue reduces a character’s max stamina by one. If a character's max stamina is reduced to zero they are rendered unconscious and any future points of fatigue suffered are treated instead as wounds.
* Wound - when a character suffers a wound they lose two stamina and gain a wound to the damaged location. Skill checks gain a penalty die for each wound the character has on the used location and a flat penalty equal to the total number of wounds the character is suffering from. A character with at least as many wounds as his Max Wound attribute is dying and rendered unable to act. A character that suffers a single hit/effect which inflicts at least as many wounds as their Max Wound attribute, or a character with a total number of wounds exceeding double their max wound attribute, dies immediately. When a character suffers more than one wound from a single attack mark it as an "x Wound" this denotes the severity of the injury and is used to determine how quickly the character heals and any long term damage they may suffer.

### Dying and permanent injuries

#### Dying
A dying character may not act and becomes unconscious at the end of the round, if not already. A character who is dying must receive medical attention within X rounds where X is one plus their rank in the Endurance primary skill or they suffer an additional wound caused by blood loss and internal injury, suffering this effect additional times adds additional level one injuries. A character who receives proper medical attention does not continue dying but does remain unconscious until they have healed at least one wound. A character suffering more wounds than their max wounds attribute can not recover stamina or remove stuns or fatigue.

#### Permanent Injuries(optional) TBA

## Recovering from damage

#### Recovering from minor injuries
* Stamina - a character can regain stamina during combat by taking a recovery action, outside of combat a character's stamina is reset to their max stamina after a minute of relaxing inactivity or five minutes of un-strenuous activity.
* Stun - a character can remove stuns during combat by taking a recovery action, outside of combat a character looses one stun for every minute of rest or 5 minutes of un-strenuous activity.
* Fatigue - recovering from fatigue requires rest, a character spending a full hour at rest looses one fatigue, a character looses twice as much fatigue for time spent sleeping.

#### Recovering from wounds
Recovering from wounds is a slow process. Each day a character spends mostly at rest and with no strenuous activity, or week not resting properly, they may make a recovery check. A recovery check is like a skill check with a die pool contain xd6 where x is equal to the character's body stat and a number of penalty dice equal to the total number of wounds the character is suffering from; bonus dice may be added to this check by certain traits and by medical assistance. Compare the result to the chart below to find the effects of the recovery check.
| Recovery check total | Effect |
| --- | --- |
| 0-4  | The character is not healing properly, their wounds become infected and they develop sepsis. Each injury the character is suffering from has its severity increased by one, the character gains one wound for each injury they are recovering from  |
| 5-9  | The character's wounds are getting infected. The worse injury the character is suffering from has it's severity increased by one, that character gains one additional wound.  |
| 10-14  | The character is stable but recovering slowly. No effect.  |
| 15-19  | The character is healing well, remove one of the character's level one injuries and remove one wound.  |
| 20-24  | The character is healing quickly, remove one of the character's level one injuries or, if they have none, reduce a higher level injury by one level and remove one wound. |
| 25+  | The character is healing at a miraculous rate, remove all of the character's level one injuries or, if they have none, reduce each higher level injury by one level and remove one wound fore each injury removed or reduced.  |

## Damage Types
#### Concussive damage
Concussive damage is reduced by the character’s body stat and physical damage resistance.

| Damage | stamina/stun/wound | Damage | stamina/stun/wound
| --- | --- | ---| ---
| 1 | 1 stamina | 10 | 1 wound + 1 stun
| 2 | 2 stamina | 13 | 2 wounds
| 3 | 1 stun | 17 | 3 wounds
| 5 | 2 stuns | 21 | 4 wounds
| 7 | 1 wound | every additional 3 | +1 stamina, 1 stun, 1 wound

#### Penetrating damage
Penetrating damage with armor piercing value less than the target’s armor value becomes concussive. Penetrating damage is reduced by the character’s physical damage resistance.

| Damage | stamina/stun/wound | Damage | stamina/stun/wound |
| --- | --- | ---| --- |
| 0 | 1 stamina | 7 | 2 wounds |
| 1 | 1 stun | 10 | 3 wounds |
| 2 | 2 stuns | 13 | 5 wounds |
| 4 | 1 wound | every additional | +1 wound |

#### Fire damage
Fire damage is reduced by any fire resistance the character may have. Fire damage causes burning; the character suffers the same damage -1 next round to the burning body location, if this damage was itself caused by burning randomly determined one adjacent body location to also suffer this damage next round; if a body location would suffer multiple instances of burning only resolve the most severe one. Any character with one hand free within one meter of a burning character may take an action, with a one turn requirement, to reduce all burning damage they would suffer next round by 3, this reduction is increased to 5 if the burning character is prone; a character with two free hands may double this reduction.

|Damage | stamina/stun/wound | Damage | stamina/stun/wound
| --- | --- | ---| ---
| 1 | 1 stamina | 8 | 1 wound, burning
| 3 | 1 stun | 13 | 2 wounds, burning
| 5 | 1 stun, burning | every additional 5 | +1 wound, burning|

#### Cold damage
Cold damage is reduced by a character’s body stat plus any cold resistance they may have. Cold damage gains +1 for every round the target has suffered cold damage since they were last warm.

| Damage | stamina/stun/wound | Damage | stamina/stun/wound
| --- | --- | ---| ---
|1 | 1 stamina | 13 | 2 fatigue, 1 wound
| 3 | 2 stamina | 17 | 3 fatigue, 1 wound
| 5 | 1 fatigue | 21 | 4 fatigue, 2 wounds
| 8 | 2 fatigue | every additional 3 | +1 fatigue, +1/2 wound

#### Lightning damage
Lightning damage is reduced by the character’s body, armor value that is gained from metal armor, and by any lightning resistance they may have. Lightning damage is always inflicted to the body location.

| Damage | stamina/stun/wound | Damage | stamina/stun/wound
| --- | --- | ---| ---
| 0 or less | recovers 1 stamina | 8 | 3 stuns
| 1 | 1 stamina | 10 | 3 stuns,  wound
| 2 | 1 stun | Every additional 3 | +1 stun
| 5 | 2 stuns | every additional 10| +1 wound

#### Arcane Dues
A character suffers a number of points of arcane dues equal to the total number of successes in an effect the mage casts or creates. Arcane dues is handled in three steps, first reduce the dues by up to the character’s body stat lose a stamina per point reduced, then reduce the remainder by up to the character’s body stat taking one fatigue per point reduced, finally take a number of wounds equal to the remaining points to the character’s body location.
