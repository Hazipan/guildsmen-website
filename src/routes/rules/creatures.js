import { Link } from "react-router-dom";
import toTop from "../../js/toTop";
import BackToContents from "../../components/backToContents";
import '../../css/creature-block.css'

const Creatures = () => {
  return (
    <main>
      <h1>Creatures</h1>
      <p>Creatures in this game are designed with the idea that people are fragile and easily killed. For example, if a regular person ran at a bear, swinging a sword, trying to kill it, that person would most likely end up dead. When fighting creatures, the idea is to constantly be avoiding the creatures’ attacks, and the moment you mess up, you die. </p>

      <p>When encountering creatures of any type, remember to use what skills and stats your character is best at and to avoid ever going in alone. You can only take seven Harm before dying. Many creatures can deal that much Harm in one blow.</p>

      <p>For a comprehensive set of creatures, go to the <Link onClick={toTop} to='/bestiary'>The Bestiary</Link>.</p>

      <h2>Understanding the Creature Block</h2>
      <p>The creature block is how creatures’ stats, actions, and descriptions are outlined. They all appear like so:</p>

      <div className="creatureBlock">
        <p className="title">Bear: Grizzly Bear (T5, +0)</p>
        <div className="stats">
          <p>Tough +9 | Nimble +5</p>
          <p>Competence +0 | Constitution +4</p>
          <p>Harm 11 | Armor 2</p>
        </div>
        <p className="creatureDescription">Grizzly bears are medium creatures weighing up to 1,500lbs and sizing up to 8.5ft tall. These creatures travel on their own. Grizzly Bears are extremely territorial and are generally active during the day.</p>
        <div className="actions">
          <p className="actionHead">Actions</p>
          <p><strong>Claw</strong> (+5) – The Grizzly Bear comes at you with its thick claws to maim your body.</p>
          <p><strong>Bite</strong> (+4) – The Grizzly Bear goes to take a huge bite out of you.</p>
          <p><strong>Maul</strong> (+7) – The Grizzly Bear furiously uses teeth and claws to decimate you.</p>
          <p><strong>Roar</strong> – The Grizzly Bear bellows out a powerful roar, <Link onClick={toTop} to="/rules/combat">Frightening</Link> all creatures within 20ft for as long as they are in combat with it.</p>
        </div>
      </div>

      <p>At the top of the creature block is the name, tier, and modifier of the creature. In this case we have a Grizzly Bear that is classified as a tier five creature with a +0 modifier.</p>

      <p>A creature’s tier is an indicator of how dangerous the creature is. Regular people never go beyond tier three, so anything above tier three is very deadly to a person.</p>

      <p>A creature’s modifier (in this case, +0) is the number that gets added to skill checks and actions. So, if this bear would attack you with its claws, it would roll 2d6 and add 0. If it were to investigate an area with its nose, it wouldn’t add anything.</p>

      <p>The top-left box (top box on mobile screens) of the creature block outlines the creature’s stats. The creature’s Tough, Nimble, Competence, and Constitution are outlined here, as well as the amount of Harm they can take before dying and their Armor score.</p>

      <p>When a creature rolls a stat check, they will add their stat to the roll. So, if a character wanted to try and grapple a bear, both would roll 2d6. The character would get no more than a +3 to the roll, but the bear would get +14 to the roll, making it impossible to grapple the bear alone.</p>

      <p>The bottom-left box (center box on mobile screens) on the creature block gives a description of the creature. This generally outlines what the creature looks like, how it behaves, and other important information.</p>

      <p>The large, right box (bottom box on mobile screens) on the creature block outlines all the common actions that the creature would use. After the title of the action is a number in parenthesis. This is the Bonus to the attack that the creature has for that action. If the creature is successful when using the action, the Bonus is then added to the dice roll to determine damage.</p>

      <p>Creatures can perform actions outside of the listed actions. The actions outlined are all the regular, combat-oriented actions that the creature would use so that the Game Master has clear rules for how much Harm a creature could deal given a certain action.</p>

      <h2>Creating Custom Creatures</h2>
      <p>The creatures outlined within in the Bestiary are just a sample of the wide variety of creatures that <em>could</em> be encountered, but there are many, many more in the world. If you want to create creatures of your own, there are two ways of doing it.</p>

      <p>You can (1) take a creature that is already made and use all its stats and actions for your custom creature, just changing the descriptions and titles for everything, or (2) use the charts below to create a creature from scratch.</p>

      <p>When choosing the second option, you'll first need to decide on a tier for your custom creature. Tiers range from one to eight, and any creature beyond tier eight is considered Legendary. Legendary creatures are meant to be taken on by large groups of people or even entire armies. The following table outlines each tier with an example creature that would be that tier.</p>

      <table>
        <thead>
          <tr>
            <th colSpan={2}>Tier Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='bottom left'>1</td>
            <td className='bottom right alignRight'>House Cat</td>
          </tr>
          <tr>
            <td className='bottom left'>2</td>
            <td className='bottom right alignRight'>Common Person</td>
          </tr>
          <tr>
            <td className='bottom left'>3</td>
            <td className='bottom right alignRight'>Trained Fighter</td>
          </tr>
          <tr>
            <td className='bottom left'>4</td>
            <td className='bottom right alignRight'>Wolf</td>
          </tr>
          <tr>
            <td className='bottom left'>5</td>
            <td className='bottom right alignRight'>Grizzly Bear</td>
          </tr>
          <tr>
            <td className='bottom left'>6</td>
            <td className='bottom right alignRight'>Hippo</td>
          </tr>
          <tr>
            <td className='bottom left'>7</td>
            <td className='bottom right alignRight'>Maticore</td>
          </tr>
          <tr>
            <td className='bottom left'>8</td>
            <td className='bottom right alignRight'>Cerberus</td>
          </tr>
          <tr>
            <td className='bottom left'>Legendary</td>
            <td className='bottom right alignRight'>Dragon</td>
          </tr>
        </tbody>
      </table>

      <p>From here, you can determine their stats, their Bonus when attacking, and the Harm they can take using the following chart.</p>

      <table>
        <thead>
          <tr>
            <th colSpan={4}>Custom Creature Stats</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='bottom left alignLeft'><strong>Tier</strong></td>
            <td className='bottom'><strong>Max Stat</strong></td>
            <td className='bottom'><strong>Max Bonus</strong></td>
            <td className='bottom right'><strong>Max Harm</strong></td>
          </tr>
          <tr>
            <td className='bottom left alignLeft'><em>Tier 1</em></td>
            <td className='bottom'>+1</td>
            <td className='bottom'>+0</td>
            <td className='bottom right'>2</td>
          </tr>
          <tr>
            <td className='bottom left alignLeft'><em>Tier 2</em></td>
            <td className='bottom'>+2</td>
            <td className='bottom'>+1</td>
            <td className='bottom right'>4</td>
          </tr>
          <tr>
            <td className='bottom left alignLeft'><em>Tier 3</em></td>
            <td className='bottom'>+3</td>
            <td className='bottom'>+2</td>
            <td className='bottom right'>7</td>
          </tr>
          <tr>
            <td className='bottom left alignLeft'><em>Tier 4</em></td>
            <td className='bottom'>+6</td>
            <td className='bottom'>+4</td>
            <td className='bottom right'>9</td>
          </tr>
          <tr>
            <td className='bottom left alignLeft'><em>Tier 5</em></td>
            <td className='bottom'>+9</td>
            <td className='bottom'>+6</td>
            <td className='bottom right'>12</td>
          </tr>
          <tr>
            <td className='bottom left alignLeft'><em>Tier 6</em></td>
            <td className='bottom'>+12</td>
            <td className='bottom'>+8</td>
            <td className='bottom right'>15</td>
          </tr>
          <tr>
            <td className='bottom left alignLeft'><em>Tier 7</em></td>
            <td className='bottom'>+15</td>
            <td className='bottom'>+10</td>
            <td className='bottom right'>18</td>
          </tr>
          <tr>
            <td className='bottom left alignLeft'><em>Tier 8</em></td>
            <td className='bottom'>+18</td>
            <td className='bottom'>+12</td>
            <td className='bottom right'>21</td>
          </tr>
          <tr>
            <td className='bottom left alignLeft'><em>Legendary</em></td>
            <td className='bottom'>+20</td>
            <td className='bottom'>+15</td>
            <td className='bottom right'>25</td>
          </tr>
        </tbody>
      </table>

      <p>*Legendary stats are guidelines, not hard rules. They could go much higher if needed.</p>

      <p>Max stat is how high their Tough, Nimble, Competence, and Constitution stats can be. Max Bonus is how high their Bonus when attacking can be. Max Harm is the maximum amount of Harm that they can take before dying.</p>

      <p>All creatures should also have a specific size. The following is a chart to help determine the size of a creature:</p>

      <table>
        <thead>
          <tr>
            <th colSpan={2}>Tier Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='bottom left alignLeft'>Tiny</td>
            <td className='bottom right alignRight'>less than 5"</td>
          </tr>
          <tr>
            <td className='bottom left alignLeft'>Very Small</td>
            <td className='bottom right alignRight'>5"-1'</td>
          </tr>
          <tr>
            <td className='bottom left alignLeft'>Small</td>
            <td className='bottom right alignRight'>1'-3'</td>
          </tr>
          <tr>
            <td className='bottom left alignLeft'>Medium</td>
            <td className='bottom right alignRight'>3'-7'</td>
          </tr>
          <tr>
            <td className='bottom left alignLeft'>Large</td>
            <td className='bottom right alignRight'>7'-12'</td>
          </tr>
          <tr>
            <td className='bottom left alignLeft'>Very Large</td>
            <td className='bottom right alignRight'>12'-24'</td>
          </tr>
          <tr>
            <td className='bottom left alignLeft'>Giant</td>
            <td className='bottom right alignRight'>24'-50'</td>
          </tr>
          <tr>
            <td className='bottom left alignLeft'>Massive</td>
            <td className='bottom right alignRight'>50'-100'</td>
          </tr>
          <tr>
            <td className='bottom left alignLeft'>Colossal</td>
            <td className='bottom right alignRight'>100'-250'</td>
          </tr>
          <tr>
            <td className='bottom left alignLeft'>Titanic</td>
            <td className='bottom right alignRight'>250'-500'</td>
          </tr>
        </tbody>
      </table>

      <p>From here, outline your creature with specific stats using the charts above and preset creatures as guidelines. Be sure to give them a good description and unique actions.</p>
      <BackToContents />
    </main>
  )
}

export default Creatures;