# Actions
<!-- TODO this chapter goes back and forth between referring to "the character and you/your; fix this!" -->

## The skill check
When a character may wishes to attempt an action where success is not certain and failure is not guaranteed, or when a character’s degree of success or failure matters, the GM may call for a skill check.

### Important terms for a skill check
* Primary attribute - the primary attribute most relevant to the action being taken.
* Primary skill - the primary skill most relevant to the action being taken.
* Die pool - dice rolled when making a skill check.
* Bonus/Penalty dice - extra d6s added to the die pool.

### Steps for making a skill check
* Declare the action the character intends to take
* Determine if action requires a skill check
* Determine primary attribute, and primary skill
* Build die pool
    * add primary attribute’s score d4s
    * add ranks in primary skill d8s
* Add bonus and penalty dice to the die pool
* Roll all dice in the die pool
* For each penalty die, one at a time, remove the die with the highest score from the die pool
* From the remaining dice select a number of dice of your choice (generally those with the greatest results) equal to the primary attribute score; the total of these selected dice is the skill check’s result
* Compare the result to the action’s difficulty, and determine the result.

#### Skill Check Results
Compare the skill check result to its difficulty and resolve the action as follows:
* __Critical Failure__ (Result is less than half the difficulty) - the skill check fails badly, the GM should consider some negative result based on the check in question if it is not explicitly detailed in the skill check description (a crafting check wastes the materials that would be used, a movement check results in the character tripping and falling, etc.).
* __Failure__ (Result is greater than half the difficulty but less than the difficulty minus five) - the skill check fails with no benefit or penalty.
* __Near Failure__ (Result is less than, but within five, of the difficulty) - the skill check fails but makes some progression towards a future success.
* __Success__ (Result is equal to or greater than the difficulty) - the skill check succeeds!
* __Additional Successes__ (Result is at least three greater than the difficulty) - for every three points by which the result exceeded the difficulty the action gains an additional success granting some additional benefit to the skill check.

### Roll-less skill checks (take standard/take time) *NOTE* these need better terms
When a player wishes to not risk a poor roll during a skill check they may take a standard result or, if the character is not rushed, take their time. Opposed or attack skill checks can never be made roll-lessly. Roll-less skill checks follow these alternate steps:
* Declare the action the character intends to take
* Determine if action requires a skill check
* Determine primary attribute and primary skill
* Calculate successes:
    * add the primary attribute, halved for standard, plus one to successes
    * add the primary skill's rank to successes
    * add half the number of bonus dice as successes
    * Remove one successes for every penalty die, halved for time taken.
* Apply your total successes, ignoring any partial success, to the action being taken

## Combat and round based play
Sometimes characters find themselves in stressful, potentially life or death, situations where the timing of each action becomes more important; at these times the game transitions from the normal player/GM narrative into round based play. In round based play characters declare and resolve their actions on their turns which happen in initiative order. Once all characters have acted the GM describes the updated scene; if the reason for round based play continues to be present recheck everyones initiative and begin another round.

### Turns during round based combat
Each character on their turn may take actions to move, attack, etc. All actions they may take have a cost in stamina, defense, or both as well as a turn requirement; a character may not declare multiple actions with a turn requirement of one or greater during their turn. An action’s turn requirement is simply how many turns a character must take in order to perform that action, an action with a standard turn requirement of zero may only be taken once per turn unless detailed otherwise in the actions description.

## Combat Actions
These actions actions are those that will commonly be taken during round based combat but are by no means limited to that type of play. Each action is detailed with its name followed by its stamina cost in parentheses and a description.

### Move actions
The first move action a character takes each round has a turn requirement of zero, subsequent move actions have a turn requirement of one. When outside of turn based combat there is no need to specifically track stamina spent on movement, if moving at a regular pace (up to five times your base movement per minute) arrive at your destination with full stamina if moving at a quick pace (up to 10 times your base movement per minute) you arrive at any destination with only half your max stamina and suffer two penalty dice to all perception checks along the way.
#### Walk(0)
Move half your base movement in meters, round down.
#### Dash(2)
Move up to your base movement in meters.
#### Sprint(3)
TBA.
#### Swim(2)
Make a skill check using body as the primary attribute, personal movement as the primary skill, and a difficulty of 10-30(depending on conditions), if the check succeeds move through water up to 1 meter per rank in the swim secondary skill plus 1 meter per additional success in the skill check.
#### Climb(2)
Make a skill check using body as the primary attribute, personal movement as the primary skill, and a difficulty of 10-30(depending on conditions), on a success transverse across a surface up to 1 meter per rank in the climb secondary skill plus 1 meter per success in the skill check, if the skill check fails the character loses his grip and falls.
#### Jump(2)
 make a skill check using body as the primary attribute, personal movement as the primary skill, and a difficulty of 10, on a success jump horizontally a number or meters equal to your rank in the jump secondary skill plus 1 meter per two additional success, or half that distance vertically, increase the total distance by 50% if you've taken a dash or sprint action already this turn.

### Melee Actions
Unless stated otherwise, melee actions have a turn requirement of one.
#### Basic attack(1)
Make an attack with the character’s body or readied melee weapon. A melee attack skill check use reflexes as its primary attribute, melee combat as its primary skill, and gains the character's rank in the weapon's type secondary skill in bonus dice so long as they are proficient with it.
#### Bash(2)
Make a basic attack designed to send the target to the ground, this attack must be performed with a weapon or attack with the _Bash_ keyword and has no additional effect if it deals penetrating damage with this attack. The attack’s skill check gains two penalty dice unless it is being performed with a shield. If the attack hits compare its damage plus twice the character's rank in the bash secondary skill, to the target’s defense, if the damage fails to exceed the target’s melee defense but is greater than their defense the target must move back one meter, if the damage exceeds the target’s melee defense they are knocked to their knees, if it exceeds it by 5 or more the target is knocked prone.
#### Disarm(2)
Make a basic attack targeting an opponents weapon instead of body, add two penalty dice to the skill check if the targeted weapon is wielded one-handed and four penalty dice if it's wielded two-handed. This attack cannot be made targeting a weapon with reach more than 2 plus the character's rank in the disarm secondary skill higher than its own. If the skill check succeeds the weapon is knocked to the ground, for each additional success on this attack the weapon may be moved one meter in a direction of the attacker's choice. If this attack is made with an open hand and fails the attacker suffers damage to the arm used to make the attack as if they were struck by the weapon they attempted to disarm, this damage is reduced by the character's rank in the disarm secondary skill, if the skill check succeed with at least one additional success the attacker may ready the disarmed weapon.
#### Distracting attack(2)
Make a basic attack with two penalty dice added to the skill check, three if the opponents weapon's reach is greater than the attackers; if the skill check results in a near miss the target loses one additional point of defense plus the character's rank in the distracting attack secondary skill, if the skill check succeeds the target loses 3 additional defense plus the character's rank in the distracting attack secondary skill, additional successes may be spent to force them to lose an additional 2 defense.
#### Flurry of blows(3)
Make a basic attack with two penalty dice added to the skill check; if the skill check succeeds the character ignores any additional successes in excess of their rank in the flurry of blows secondary skill, then resolve its results twice.
#### Half-Sword(2)
Make a basic attack using a one handed weapon with the thrust keyword two-handed. For this attack treat the weapon's reach as half of its base value. This attack does not gain a standard two handed bonus but does gain additional APV equal to the character's rank in the half-sword secondary skill, and each additional success spent to increase APV increases it by an additional one.
#### Lunge(2)
Make a basic attack treating the character’s, not the weapon’s, reach as double its standard value for this attack plus the character's rank in the lunge secondary skill. This attack's skill check has two penalty dice added to it and the character loses any parry bonus from the weapon used until the beginning of their next turn unless the weapon or attack used has the _Thrust_ keyword.
#### Off-hand attack(1)
Make a basic attack with a readied weapon the character is wielding in their off hand with a turn requirement of zero with two penalty dice, reduced by the character's rank in the off-hand attack secondary skill, added to the skill check, in addition to the penalty die added for using the character's off-hand. Ignore any additional successes from this attack's skill check and the character loses the weapon's parry bonus until the beginning of the character's next turn.
#### Power attack(2)
Make a basic attack with two penalty dice added to the skill check, zero penalty dice if this is the first attack after the character performed a dash action this turn and this action has a turn requirement of one; the character treats his body stat as if it were the character's rank in the power attack secondary skill plus 1 greater for the purposes of calculating damage on this attack. Each additional success spent to increase the attack's damage increases its damage by an additional one, also increase the weapon's APV by one if the weapon or attack has the _pick_ keyword.
#### Quick attack(2)
Make a basic attack with a turn requirement of 0, if the skill check succeeds the character ignores any additional successes in excess of their rank in the quick attack secondary skill. Limit once per round.
#### Ready/Stow Weapon(0)
A one or more weapons not currently readied but within easy reach, and uncontested, become readied by the character or the character sheaths, holsters, pockets, or slings one or more readied, uncontested weapons. This action's turn requirement can be reduced to zero provided by adding a penalty die to all other skill checks taken until the beginning of the character's next turn.
#### Reckless attack(2)
Make a basic attack and choose to gain between up to three, plus the character's rank in the reckless attack secondary skill, bonus dice to the attack's skill check, after performing the attack the character loses defense equal to twice the number of bonus dice this attack added to the skill check, reduced by the character's rank in the reckless attack secondary skill.
#### Trip(2)
Make a basic attack with the character's body or a weapon with the _Trip_ keyword. This attack's skill check has two penalty dice added to it and deals no damage. The defender get's a situational defense bonus equal to the sum of their ranks in personal movement and the balance secondary skill. If the attack succeeds the target it knocked prone. If the attack was made with a weapon and failed to meet the targets current defense (miss), minus the character's rank in the trip secondary skill and minus 5 if the weapon was wielded two-handed, the weapon is dropped by the target's feet. If the attack was made with the character's body and failed to meet the targets current defense plus bonuses(near miss), minus the character's rank in the trip secondary skill, the attacker loses 3 defense; if the attack failed to meet the targets current defense (miss), minus the character's rank in the trip secondary skill and minus 5 if the attacker has more than two legs, the attacker becomes prone.

### Ranged Actions
Ranged actions have a turn requirement of one that can be reduced to zero by adding one penalty die to this skill check and all other skill checks made until the beginning of the character's next turn.
#### Aim(0)
Select a target, your ranged attacks against that target gain one plus the character's rank in the aim secondary skill bonus dice, until the end of the character's next turn. Aim’s turn requirement may not be reduced.
#### Load weapon(varies)
Refer to the weapon’s description for details on loading requirements.
#### Loose/shoot/fire(0)
Make an attack with a readied, loaded, ranged weapon or spell. This skill check uses perception as its primary attribute and gains a number of bonus dice equal to their rank in the weapon's secondary skill it also gains a bonus die for each size the target is over 5 and a penalty die for each size they are less than 5.
#### Ready weapon/ammo(0)
Ready a ranged weapon or one plus ranks in reload pieces of ammunition.
#### Throw(1)
Make a ranged attack with a ready throwing weapon. Gain a bonus die for every rank in the throw secondary skill plus an additional bonus die for every two ranks in a relevant melee combat secondary skill for this weapon it also gains a bonus die for each size the target is over 5 and a penalty die for each size they are less than 5.

### Magic Actions
Magic actions have a turn requirement of one and may only be taken by characters with an arcane trait. Magical skill checks use mind as a primary attribute.
#### Cast Cantrip(2)
Choose one cantrip the character knows, cast that cantrip. This action's turn requirement may be reduced to zero, doing so adds one penalty die to all other actions taken until the beginning of your next turn; the caster may not take an additional magic action until their next turn.
#### Cast gated spell(0)
Choose one spell the character knows and make an arcane aptitude skill check with a difficulty equal to the spell's difficulty. If the skill check was successful resolve the spell's effects at the gated level and suffer arcane dues equal to the spell's cost. If the skill check failed the character suffers arcane dues equal to the number of successes rolled.
#### Cast ungated spell(0)
Choose one spell the character knows and make an arcane aptitude skill check with a difficulty equal to one plus the spell's difficulty. If the skill check was successful resolve the spell's effects at the gated level enhanced by one instance of a success from a power in the spell's pool for each additional success rolled and suffer arcane dues equal to the number of successes rolled plus the spell's cost modifier. If the skill check failed the character suffers arcane dues equal to the number of successes rolled.
#### Gather arcane energy(0)
Make an arcane aptitude skill check. This check’s successes are stored for future use. A character with stored arcane energy who takes an action with a turn requirement of one other than to gather or shape arcane energy will lose all stored successes and suffer arcane dues as if they had released a crafted effect with them. This action can only be taken a number of turns in a row equal to the mage's rank in the arcane aptitude primary skill.
#### Shape arcane energy(0)
A character with stored arcane energy shapes those successes into an effect. Make an arcane aptitude skill check. For every success rolled one stored success may be added to a power in the crafted effect.
#### Release crafted effect(0)
The character releases the effect they've crafted, the effect as is either immediately activated or can be thrown as normal within a number of rounds equal to the character's rank in arcane aptitude. The character suffers arcane dues equal to the number of successes worth of power they had stored plus one for each action they took a gather arcane energy or shape arcane energy action. The arcane dues are suffered whether the stored power was shaped into the effect or not. Any stored successes that were not shaped into the effect are lost.

### Defensive Actions
Defensive Actions have a turn requirement of one that can be reduced to zero by adding two penalty dice to each other action taken until the beginning of the character's next turn. A defensive action must be taken before any, non-movement, action requiring a skill check.
#### Disengage(2)
Act defensively gaining plus 10 to the character's defense against free attacks until their next turn. Once performed this action cannot be taken until the beginning of the character's next turn.
#### Dodge(2)
Bob and weave, zig and zag, and otherwise generally make yourself difficult to hit by range attacks. The character gains a bonus to their ranged defense equal to one plus their rank in the dodge secondary skill for every 5 meters moved this turn.

### Recovery Actions
Recovery actions have a turn requirement of one that may not be reduced.
#### Regain Composure(1)
A character cannot perform this action if they've already made an attack this round and a character who performs a regain composure action cannot perform an attack until the beginning of their next turn. Make a skill check using reflexes or perception for the primary attribute and personal defense as the primary skill. The character recovers defense equal to their ranks in regain composure plus one for each success rolled.
#### Restoration action(0)
Restoration can not be performed in a turn where the character spends more stamina than they have ranks in the stamina secondary skill. Make a skill check using body for primary attribute and endurance for the primary skill. The character recovers an amount of stamina equal to their ranks in the stamina secondary skill plus one per additional success rolled, the character may reduce the amount of stamina recovered by 3 to lose one stun.

### Combat Modifiers
Various conditions can affect a combat situation, changing the difficult to hit a target.
#### Kneeling or prone
Kneeling characters gain +2 ranged defense and -3 melee defense and lose 3 meters distance when making a movement action. Prone characters triple these effects.
#### Behind cover
A +1 to +9 defense bonus against attacks made from the other side of the cover. Attacks missing due to this bonus damage the cover. If a character is gaining cover from more than one source such as being partially hidden behind a low wall and they are wielding a shield, they gain the cover bonus of whichever is greater plus one for each additional piece of cover up to a maximum of +9 after which the character is completely covered and can not be attacked.
#### Concealed
Like cover, concealment grants a variable defense bonus based on completeness of it.
#### Flanking
If a character has multiple opponents in melee range and at least one is outside their front arc they suffer a -1 penalty to their melee defense for each opponent contributing to the situation.
#### Flat Footed
The character starts combat having lost defense equal to their reflexes stat.
#### Surprised
The character does not gain melee or ranged defense bonuses including parry and block bonuses from carried equipment.
#### Wind
Depending on the strength and regularity of the wind, ranged attack skill checks receive up to five penalty dice, heavier or smaller projectiles should receive lesser penalties and massless ranged magical effects do not suffer ranged penalties from wind.
#### Reach
Against a character with greater reach than your melee attack’s add one penalty die plus one for every five points by which their reach exceeds yours to the attack’s skill check or grant your opponent a free strike against you. This penalty is incurred the first time you attack this target since engaging or their last defensive action.

### Reactions
Reactions are special actions that are taken outside of the character's turn. A character can make only one reaction between each of their turns. Reactions have no turn requirement even if they specify taking an action that normally would.

#### Free attack(\*)
When an opponent moves through a hex the character threatens the character may immediately make a basic attack action, off handed attack action, loose/shoot/fire action, or a throw action with a ready, loaded when applicable, weapon or spell against that opponent. This reaction's stamina cost is that of the action taken.
#### Take cover(2)


## Non-Combat Actions
Many primary skills are used partially or entirely out of combat; a, by no means exhaustive, list of some common actions associated with each primary skill is listed below. Many non-combat actions have a _passive_ tag; actions with a _passive_ tag detail skill checks the GM will ask the players to make not actions the character chooses to make.


#### Investigate Area
  - Primary Attribute: Perception
  - Primary Skill: Awareness
  - Relevant Secondary Skills: Investigate
  - Relevant Secondary Skill Usage: if a character finds a clue they may ask the GM one question for each rank they have to gain additional information from the clue; the GM must give true answers but does not need to reveal information the clue could not provide.
  - Aiding Others: when aiding another character grant their skill check one bonus die plus one bonus die for each rank the aiding character has in the secondary skill.
  - Description: the character looks for information in an area related to a specific topic declared by the player.
  - Difficulty: set by the GM (generally ~5-10 for obvious clues, 10-15 for slightly obscure ones and 20 or higher for really obscure clues) in the event of multiple clues use a single skill check result and compare it to the difficulty of of the easiest to find clue and assign the additional clues a cost in additional successes to find.
  - Critical Failure: a clue is not found but is potentially damaged or lost during the course of the investigation preventing the character from gaining some or all of its information.
  - Failure: no clue was found, the character may not try again without additional help.
  - Near Failure: if the character is not rushed they find the clue but do not get to ask any questions granted by ranks in the secondary skill, if they are rushed they do not find the clue but can look try again in the future.
  - Success: the clue was found.
  - Additional Success: if there were more than one clue to find additional successes are used to find additional clues as determined by the MG.

#### Keep Watch
  - Primary Attribute: Perception
  - Primary Skill: Awareness
  - Relevant Secondary Skills: Alertness
  - Relevant Secondary Skill Usage: gain additional successes equal to your rank on a successful skill check.
  - Aiding Others: none, multiple characters keeping watch should each make a keep watch skill check.
  - Description: the character actively attempts to keep an eye out and an ear open for signs of danger or other unusual happenings.
  - Difficulty: determined by the GM (10-20 for most situations), or equal to the stealth check of a sneaking character.
  - Critical Failure: the character falls asleep during their watch or is otherwise distracted making it easier for any potential dangers to happen.
  - Failure: the character fails to notice any signs of danger.
  - Near Failure: the character doesn't notice any danger until it's too late, they may be aware of an attack or theft after it happens and have a chance to respond to it.
  - Success: the character notices the danger or event at the last possible moment and has one round to respond to it.
  - Additional Success: for each additional success the character notices the danger or event sooner allowing for more time to react.

#### Search for Item(s)
  - Primary Attribute:
  - Primary Skill:
  - Relevant Secondary Skills:
  - Relevant Secondary Skill Usage:
  - Aiding Others:
  - Description:
  - Difficulty:
  - Critical Failure:
  - Failure:
  - Near Failure:
  - Success:
  - Additional Success:

## Passive Non-Combat Skill Checks
Some skill checks are made because something is happening in the world that the players may be able to react to depending on the success of the action in question. These skill checks are made only when the GM calls for them and not as a response to an action taken by the character.


#### Alertness Check
  - Primary Attribute: Perception
  - Primary Skill: Awareness
  - Relevant Secondary Skills: Alertness
  - Relevant Secondary Skill Usage: gain additional successes equal to your rank on a successful skill check.
  - Aiding Others: none, multiple characters asked to make alertness checks should each make them individually.
  - Description: when there's something the character may not notice they should be asked to make this check to see if they become aware of it.
  - Difficulty: determined by the GM (10-30 for most situations), or equal to the stealth check of a sneaking character.
  - Critical Failure: the character falls to notice anything and if a danger is presented they are off kilter for it, both being surprised and being flatfooted losing.
  - Failure: the character fails to notice any signs of whatever they may have noticed.
  - Near Failure: the character doesn't notice any danger until it's too late, but is not surprised on the first round of combat; they do not notice any non-danger cause for the check.
  - Success: the character is aware of whatever caused the check to be made, if the check was for some kind of danger they become aware of it at the last possible moment having only one round to act before the opponent.
  - Additional Success: for each additional success the character notices the danger or event sooner allowing for more time to react.

#### Action or Skill Check
  - Primary Attribute:
  - Primary Skill:
  - Relevant Secondary Skills:
  - Relevant Secondary Skill Usage:
  - Aiding Others:
  - Description:
  - Difficulty:
  - Critical Failure:
  - Failure:
  - Near Failure:
  - Success:
  - Additional Success:
