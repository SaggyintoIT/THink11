import React, { useState } from 'react';
import Navbar2 from '../FantasyCricket/Navbar/Navbar2';
import cric from '../assets/images/icon_cricket.svg';
import foot from '../assets/images/icon_footbal.svg';
import Kaba from '../assets/images/icon_Kabaddi.svg';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is imported
import DownloadAppSection from '../Homepage/DownloadAPP/DownloadAPp';
import Footer from '../Homepage/Footer/Footer';

const PointSystem = () => {
  const [activeTab, setActiveTab] = useState('Cricket');
  const [activeSubTab, setActiveSubTab] = useState('T20'); // Default to T20
  const [isCollapsed, setIsCollapsed] = useState(true); // State for dropdown collapse

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveSubTab('T20'); // Reset to T20 when changing main tab
  };

  const handleSubTabChange = (subTab) => {
    setActiveSubTab(subTab);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <Navbar2 />

      <section className="bodypx fantasypoint text-white slidoverlay h-66">
        <div className="container-fluid pt-77 m-auto w-100 overlaytext">
          <div className="row align-items-center mt-md-0 mt-3">
            <div className="col-md-12">
              <div className="text-white text-center">
                <span className="fs-60 fw-300">
                  Think11 Fantasy Cricket <br />
                  Point System
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="darkblackbg">
        <div className="bodypx">
          <div className="container-fluid">
            <div className="row pt-4">
              <nav className="sportsTab">
                <div className="container">
                  <div className="tabs">
                    <a className={`tab ${activeTab === 'Cricket' ? 'active' : ''}`} onClick={() => handleTabChange('Cricket')}>
                      <img src={cric} alt="Cricket Icon" />
                      <span>Cricket</span>
                    </a>
                    <a className={`tab ${activeTab === 'Football' ? 'active' : ''}`} onClick={() => handleTabChange('Football')}>
                      <img src={foot} alt="Football Icon" />
                      <span>Football</span>
                    </a>
                    <a className={`tab ${activeTab === 'Kabaddi' ? 'active' : ''}`} onClick={() => handleTabChange('Kabaddi')}>
                      <img src={Kaba} alt="Kabaddi Icon" />
                      <span>Kabaddi</span>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="bodypx py-80 bg-white">
        <div className="container">
          <div className="page_wrap">
            <div className="pointsArea">
              <div id="accordion">
                <div className={`tab-content ${activeTab === 'Cricket' ? 'active' : ''}`} id="myTabContent">
                  <div className={`tabcontent ${activeTab === 'Cricket' ? 'active' : ''}`}>
                    <div className="mini-container">
                      <nav className="matchType">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button className={`tab2 nav-link ${activeSubTab === 'T20' ? 'active' : ''}`} onClick={() => handleSubTabChange('T20')}>
                              T20
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className={`tab2 nav-link ${activeSubTab === 'ODI' ? 'active' : ''}`} onClick={() => handleSubTabChange('ODI')}>
                              ODI
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className={`tab2 nav-link ${activeSubTab === 'T10' ? 'active' : ''}`} onClick={() => handleSubTabChange('T10')}>
                              T10
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className={`tab2 nav-link ${activeSubTab === 'Hundred' ? 'active' : ''}`} onClick={() => handleSubTabChange('Hundred')}>
                              The Hundred
                            </button>
                          </li>
                        </ul>
                      </nav>

                      <div className="col-md-12 text-center mb-4">
                        <span className="fn-24 fw-400">T20 Point System for Think11</span>
                      </div>

                      <div className={`tab-pane ${activeSubTab === 'T20' ? 'show active' : ''}`} id="home" role="tabpanel">
                        <div className="w-100">
                          <div className="card">
                            <button className="header" onClick={toggleCollapse}>
                              Batting Points <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" alt="Caret Down" />
                            </button>
                            <div className={`collapse ${isCollapsed ? '' : 'show'}`} data-bs-parent="#accordion">
                              <div className="card-body pointBody">
                                <table className="table pointTable">
                                  <thead>
                                    <tr>
                                      <th scope="col">Type</th>
                                      <th scope="col">Point</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Run</td>
                                      <td className="bggreen">+1</td>
                                    </tr>
                                    <tr>
                                      <td>Playing 11</td>
                                      <td className="bggreen">+2</td>
                                    </tr>
                                    <tr>
                                      <td>Boundary Bonus</td>
                                      <td className="bggreen">+1</td>
                                    </tr>
                                    <tr>
                                      <td>Six Bonus</td>
                                      <td className="bggreen">+2</td>
                                    </tr>
                                    <tr>
                                      <td>30 Runs Bonus</td>
                                      <td className="bggreen">NA</td>
                                    </tr>
                                    <tr>
                                      <td>Half-century Bonus</td>
                                      <td className="bggreen red">+2</td>
                                    </tr>
                                    <tr>
                                      <td>Century Bonus</td>
                                      <td className="bggreen">+4</td>
                                    </tr>
                                    <tr>
                                      <td>150-run Bonus</td>
                                      <td className="bggreen">+8</td>
                                    </tr>
                                    <tr>
                                      <td>200-run Bonus</td>
                                      <td className="bggreen">+16</td>
                                    </tr>
                                    <tr>
                                      <td>Dismissal For A Duck (Wicket-keeper, All-rounder & Batsman)</td>
                                      <td className="bggreen red">-2</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p>The dismissal for a duck shall be given to any player coming to the field to bat and getting out scoring 0 runs.</p>
                              </div>
                            </div>
                          </div>
                                                                    
  <div className="w-100">
  
    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">Bowling Points <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse2" className="collapse" data-bs-parent="#accordion">
        <div className="card-body pointBody">
          <table className="table pointTable">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wicket (excluding run out)</td>
                <td className="bggreen">+10</td>
              </tr>
              <tr>
                <td>2-wicket haul bonus</td>
                <td className="bggreen red">-20</td>
              </tr>
              <tr>
                <td>3-wicket haul bonus</td>
                <td className="bggreen">+2</td>
              </tr>
              <tr>
                <td>4-wicket haul bonus</td>
                <td className="bggreen">+12</td>
              </tr>
              <tr>
                <td>5-wicket haul bonus</td>
                <td className="bggreen red">-8</td>
              </tr>
              <tr>
                <td>10-wicket haul bonus</td>
                <td className="bggreen">+12</td>
              </tr>
              <tr>
                <td>Maiden over</td>
                <td className="bggreen">NA</td>
              </tr>
              <tr>
                <td>Bonus (LBW/Bowled)</td>
                <td className="bggreen">+5</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              <p>No fantasy points will be awarded for a maiden over bowled in <b>The Hundred Cricket Tournament</b>.</p>
            </li>
            <li>
              <p>Wicket (excluding run-out) includes stumped, caught out, and hit wicket. In case of a Run-out, the points for the wicket are given to the person who throws the ball. However, in a case where the batsman is stumped, the points are awarded to the wicketkeeper and the bowler is awarded points for a wicket.</p>
            </li>
            <li>
              <p>Bonus points for 10-wicket haul will be awarded at the end of the 2nd innings of the match. The points for 10-wicket haul shall only be awarded for Test matches.</p>
            </li>
            <li>
              <p>Any player qualifying for 10-wicket haul along with any other haul like 2-wicket, 3-wicket, 4-wicket or 5-wicket shall get bonus points for the 10-wicket haul as well as the other qualifying haul.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">Fielding Points <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse3" className="collapse" data-bs-parent="#accordion">
        <div className="card-body pointBody">
          <table className="table pointTable">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Catch</td>
                <td className="bggreen">+8</td>
              </tr>
              <tr>
                <td>Stumping</td>
                <td className="bggreen">+10</td>
              </tr>
              <tr>
                <td>Runout (Direct)</td>
                <td className="bggreen">+10</td>
              </tr>
              <tr>
                <td>Runout (Not a direct hit)</td>
                <td className="bggreen">+6/6</td>
              </tr>
              <tr>
                <td>3 catch haul bonus</td>
                <td className="bggreen">+2</td>
              </tr>
              <tr>
                <td>4 catch haul bonus</td>
                <td className="bggreen">+4</td>
              </tr>
              <tr>
                <td>5 catch haul bonus</td>
                <td className="bggreen">+6</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              <p>Any fielder catching three or more catches in an inning shall be awarded a catch-haul bonus. The bonus shall only be applicable in case the total number of catches by a player in a particular inning qualifies for the bonus.</p>
            </li>
            <li>
              <p>The points for Runout (not a direct hit) will be split equally among the last 2 players involved.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">Other Terms & Conditions <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse4" className="collapse" data-bs-parent="#accordion">
        <div className="card-body pointBody">
          <ul>
            <li>
              <p>The captain and vice-captain you choose to lead your team are awarded 2x and 1.5x points of the original total they score. However, any penalty points for a duck or dismissal shall not apply to the captain and vice-captain.</p>
            </li>
            <li>
              <p>All the scoring above mentioned will be applied for both practice and live matches, except in cases where the match is abandoned or canceled.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="diverder"></div>

    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">Impact and X-factor substitutes player rules<img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse5" className="collapse" data-bs-parent="#accordion">
       <div className="card-body pointBody">
  <h6>Impact player substitutes rules:</h6>
  <ul>
    <li>
      <p>Only those Impact players will receive +2 points, who are called upon during the match to replace a member of the Playing XI. They will also score points as per MyTeam11's Fantasy Point System, if and when they contribute to the match.</p>
    </li>
    <li>
      <p>Substitutes that are not categorised as Concussion substitutes, X-factor substitutes or Impact Player substitutes will not score or receive any points for their contribution to the match.</p>
    </li>
  </ul>
  <div className="table-responsive">
    <table className="table table-bordered">
      <tbody>
        <tr>
          <th colSpan="2" style={{ textAlign: 'center' }}>Additional Points</th>
        </tr>
        <tr>
          <td>Impact Player Substitutes</td>
          <td className="bggreen">+2</td>
        </tr>
      </tbody>
    </table>
  </div>
  <h6>X-factor substitutes rules:</h6>
  <div className="cricket-points">
    <ul>
      <li>
        <p>The 'X-factor Player' rule will be only applicable to the Australian T20 League. According to this rule, a team can replace a player from the initial XI with the 12th or 13th man on the team sheet. The X Factor player will be available after completion of 10th over of 1st inning. The player who is being replaced hasn't bowled more than one over or hasn't batted yet in the game.</p>
      </li>
    </ul>
  </div>
  <div className="table-responsive">
    <table className="table table-bordered">
      <tbody>
        <tr>
          <th colSpan="2" style={{ textAlign: 'center' }}>Additional Points</th>
        </tr>
        <tr>
          <td>Substitute added through X-factor in Australia T20 League</td>
          <td className="bggreen">+2</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="cricket-points">
    <ul>
      <li>
        <p>Any X-factor player will be given +2 points only when the player makes an on-field appearance as a substitute and rest of the points will be given on the basis of his in-game performance.</p>
      </li>
      <li>
        <p>Please note that the fantasy points system of normal fantasy &amp; live fantasy are same.</p>
      </li>
    </ul>
  </div>
  <div className="cricket-points">
    <ul>
      <li>
        <p>The fantasy points system of <b>Sixty Ball Championship</b> is similar to <b>T-10</b> format.</p>
      </li>
    </ul>
  </div>
</div>

      </div>
    </div>
    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">For Warm - Up Matches<img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse6" className="collapse" data-bs-parent="#accordion">
      <div className="card-body pointBody">
                      <ul>
                             <li>
                            <p>MyTeam11 allows a total of over 11 players from either side of the competing duo to participate in the game.</p>
                         </li>
                       <li>
                             <p>No points for being included in the playing team, or being called on the field to play will be awarded. The only points that will be given will be based on the scores made during the play on the field.</p>
                          </li>
                       <li>
                          <p>The players will not be given any points for being included in the Starting 11 in Warm-up match formats.</p>
                  </li>
             </ul>
        </div>
      </div>
    </div>

    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">LIVE Fantasy Terms &amp; Conditions<img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse7" className="collapse" data-bs-parent="#accordion">
      <div className="card-body pointBody">
                                    <ul>
                                       <li>
                                          <p>A user is allowed to choose 7 players in LIVE FANTASY and 2nd Innings. Out of these seven players, a maximum of 6 players can be selected from one team. There is no restriction on mandatory selection of all-rounders, batters, bowlers or wicket keepers. A user will be allocated a total of 65 credit points to create a team.</p>
                                       </li>
                                       <li>
                                          <p>Users will be asked to choose four players from their team who will fetch 4x,3x,2x and 1.5x points, respectively. Rest of the three players will fetch 1x points. Unlike normal fantasy where a user gets to choose Captain and Vice-Captain for 2x and 1.5x points respectively, it is little different in LIVE fantasy.</p>
                                       </li>
                                       <li>
                                          <p>Please note that users have to create separate teams for each LIVE fantasy slot and 2nd Innings.</p>
                                       </li>
                                       <li>
                                          <p>The stats (runs, wicket, strike rate, economy rate etc.) of the players will vary for each category. For example, a batsman who is batting from 1st over and plays till the 10th over and if a user plays LIVE fantasy in 5.1 to 9.6 over, the stats will be considered only for the chosen slot, which is 5.1-9.6 over.</p>
                                       </li>
                                       <li>
                                          <p>MyTeam11 will declare the match complete in two conditions: Either 40% of the balls in the selected slot of LIVE fantasy must be bowled or the live match must be declared complete, even if 40% balls are not bowled.<br/>For instance, if the live match is completed or declared complete (by Officials) before 40% of the balls in your selected slot/innings are bowled, MyTeam11 will declare the slot /innings complete. Also, the result of the selected slot/innings will be declared on MyTeam11 application on the ongoing LIVE match if 40% of the balls are bowled or the live match is declared complete before 40% balls are bowled.</p>
                                       </li>
                                       <li>
                                          <p>MyTeam11, at its discretion, can adjust the deadline of the selected slot/innings on the app by up to 6 balls before the beginning of the LIVE match.</p>
                                       </li>
                                       <li>
                                          <p>A user can check the scorecard and ranking of LIVE FANTASY in the respective category tabs.</p>
                                       </li>
                                       <li>
                                          <p>If a user chooses to make the fantasy team in the second innings, fantasy points will be offered only for the players’ performance in the 2nd innings.</p>
                                       </li>
                                       <li>
                                          <p>Stats, leagues, contests for every category will be different and not be clubbed at any circumstance.</p>
                                       </li>
                                       <li>
                                          <p>Fantasy points of first and second innings cannot be clubbed together.</p>
                                       </li>
                                       <li>
                                          <p>Entry fees and league size for live fantasy will vary respectively.</p>
                                       </li>
                                       <li>
                                          <p>The points system for each category remains unchanged.</p>
                                       </li>
                                       <li>
                                          <p>Please note that MyTeam11 will not be liable for any fluctuations in the scorecard after the chosen slot of LIVE fantasy is completed. MyTeam11 will not be responsible for users’ ranking caused by fluctuations in the respective scorecards.</p>
                                       </li>
                                    </ul>
                                 </div>
      </div>
    </div>
  </div>




                        </div>
                      </div>


                       <div className={`tab-pane ${activeSubTab === 'ODI' ? 'show active' : ''}`} id="home" role="tabpanel">
                        <div className="w-100">
                          <div className="card">
                            <button className="header" onClick={toggleCollapse}>
                              Batting Points <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" alt="Caret Down" />
                            </button>
                            <div className={`collapse ${isCollapsed ? '' : 'show'}`} data-bs-parent="#accordion">
                              <div className="card-body pointBody">
                                <table className="table pointTable">
                                  <thead>
                                    <tr>
                                      <th scope="col">Type</th>
                                      <th scope="col">Point</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Run</td>
                                      <td className="bggreen">+1</td>
                                    </tr>
                                    <tr>
                                      <td>Playing 11</td>
                                      <td className="bggreen">+2</td>
                                    </tr>
                                    <tr>
                                      <td>Boundary Bonus</td>
                                      <td className="bggreen">+1</td>
                                    </tr>
                                    <tr>
                                      <td>Six Bonus</td>
                                      <td className="bggreen">+2</td>
                                    </tr>
                                    <tr>
                                      <td>30 Runs Bonus</td>
                                      <td className="bggreen">NA</td>
                                    </tr>
                                    <tr>
                                      <td>Half-century Bonus</td>
                                      <td className="bggreen red">+2</td>
                                    </tr>
                                    <tr>
                                      <td>Century Bonus</td>
                                      <td className="bggreen">+4</td>
                                    </tr>
                                    <tr>
                                      <td>150-run Bonus</td>
                                      <td className="bggreen">+8</td>
                                    </tr>
                                    <tr>
                                      <td>200-run Bonus</td>
                                      <td className="bggreen">+16</td>
                                    </tr>
                                    <tr>
                                      <td>Dismissal For A Duck (Wicket-keeper, All-rounder & Batsman)</td>
                                      <td className="bggreen red">-2</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p>The dismissal for a duck shall be given to any player coming to the field to bat and getting out scoring 0 runs.</p>
                              </div>
                            </div>
                          </div>
                        
 
   
    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">Bowling Points <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse2" className="collapse" data-bs-parent="#accordion">
        <div className="card-body pointBody">
          <table className="table pointTable">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wicket (excluding run out)</td>
                <td className="bggreen">+10</td>
              </tr>
              <tr>
                <td>2-wicket haul bonus</td>
                <td className="bggreen red">-20</td>
              </tr>
              <tr>
                <td>3-wicket haul bonus</td>
                <td className="bggreen">+2</td>
              </tr>
              <tr>
                <td>4-wicket haul bonus</td>
                <td className="bggreen">+12</td>
              </tr>
              <tr>
                <td>5-wicket haul bonus</td>
                <td className="bggreen red">-8</td>
              </tr>
              <tr>
                <td>10-wicket haul bonus</td>
                <td className="bggreen">+12</td>
              </tr>
              <tr>
                <td>Maiden over</td>
                <td className="bggreen">NA</td>
              </tr>
              <tr>
                <td>Bonus (LBW/Bowled)</td>
                <td className="bggreen">+5</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              <p>No fantasy points will be awarded for a maiden over bowled in <b>The Hundred Cricket Tournament</b>.</p>
            </li>
            <li>
              <p>Wicket (excluding run-out) includes stumped, caught out, and hit wicket. In case of a Run-out, the points for the wicket are given to the person who throws the ball. However, in a case where the batsman is stumped, the points are awarded to the wicketkeeper and the bowler is awarded points for a wicket.</p>
            </li>
            <li>
              <p>Bonus points for 10-wicket haul will be awarded at the end of the 2nd innings of the match. The points for 10-wicket haul shall only be awarded for Test matches.</p>
            </li>
            <li>
              <p>Any player qualifying for 10-wicket haul along with any other haul like 2-wicket, 3-wicket, 4-wicket or 5-wicket shall get bonus points for the 10-wicket haul as well as the other qualifying haul.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">Fielding Points <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse3" className="collapse" data-bs-parent="#accordion">
        <div className="card-body pointBody">
          <table className="table pointTable">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Catch</td>
                <td className="bggreen">+8</td>
              </tr>
              <tr>
                <td>Stumping</td>
                <td className="bggreen">+10</td>
              </tr>
              <tr>
                <td>Runout (Direct)</td>
                <td className="bggreen">+10</td>
              </tr>
              <tr>
                <td>Runout (Not a direct hit)</td>
                <td className="bggreen">+6/6</td>
              </tr>
              <tr>
                <td>3 catch haul bonus</td>
                <td className="bggreen">+2</td>
              </tr>
              <tr>
                <td>4 catch haul bonus</td>
                <td className="bggreen">+4</td>
              </tr>
              <tr>
                <td>5 catch haul bonus</td>
                <td className="bggreen">+6</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              <p>Any fielder catching three or more catches in an inning shall be awarded a catch-haul bonus. The bonus shall only be applicable in case the total number of catches by a player in a particular inning qualifies for the bonus.</p>
            </li>
            <li>
              <p>The points for Runout (not a direct hit) will be split equally among the last 2 players involved.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">Other Terms & Conditions <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse4" className="collapse" data-bs-parent="#accordion">
        <div className="card-body pointBody">
          <ul>
            <li>
              <p>The captain and vice-captain you choose to lead your team are awarded 2x and 1.5x points of the original total they score. However, any penalty points for a duck or dismissal shall not apply to the captain and vice-captain.</p>
            </li>
            <li>
              <p>All the scoring above mentioned will be applied for both practice and live matches, except in cases where the match is abandoned or canceled.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="diverder"></div>

    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">Impact and X-factor substitutes player rules<img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse5" className="collapse" data-bs-parent="#accordion">
       <div className="card-body pointBody">
  <h6>Impact player substitutes rules:</h6>
  <ul>
    <li>
      <p>Only those Impact players will receive +2 points, who are called upon during the match to replace a member of the Playing XI. They will also score points as per MyTeam11's Fantasy Point System, if and when they contribute to the match.</p>
    </li>
    <li>
      <p>Substitutes that are not categorised as Concussion substitutes, X-factor substitutes or Impact Player substitutes will not score or receive any points for their contribution to the match.</p>
    </li>
  </ul>
  <div className="table-responsive">
    <table className="table table-bordered">
      <tbody>
        <tr>
          <th colSpan="2" style={{ textAlign: 'center' }}>Additional Points</th>
        </tr>
        <tr>
          <td>Impact Player Substitutes</td>
          <td className="bggreen">+2</td>
        </tr>
      </tbody>
    </table>
  </div>
  <h6>X-factor substitutes rules:</h6>
  <div className="cricket-points">
    <ul>
      <li>
        <p>The 'X-factor Player' rule will be only applicable to the Australian T20 League. According to this rule, a team can replace a player from the initial XI with the 12th or 13th man on the team sheet. The X Factor player will be available after completion of 10th over of 1st inning. The player who is being replaced hasn't bowled more than one over or hasn't batted yet in the game.</p>
      </li>
    </ul>
  </div>
  <div className="table-responsive">
    <table className="table table-bordered">
      <tbody>
        <tr>
          <th colSpan="2" style={{ textAlign: 'center' }}>Additional Points</th>
        </tr>
        <tr>
          <td>Substitute added through X-factor in Australia T20 League</td>
          <td className="bggreen">+2</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="cricket-points">
    <ul>
      <li>
        <p>Any X-factor player will be given +2 points only when the player makes an on-field appearance as a substitute and rest of the points will be given on the basis of his in-game performance.</p>
      </li>
      <li>
        <p>Please note that the fantasy points system of normal fantasy &amp; live fantasy are same.</p>
      </li>
    </ul>
  </div>
  <div className="cricket-points">
    <ul>
      <li>
        <p>The fantasy points system of <b>Sixty Ball Championship</b> is similar to <b>T-10</b> format.</p>
      </li>
    </ul>
  </div>
</div>

      </div>
    </div>
    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">For Warm - Up Matches<img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse6" className="collapse" data-bs-parent="#accordion">
      <div className="card-body pointBody">
                      <ul>
                             <li>
                            <p>MyTeam11 allows a total of over 11 players from either side of the competing duo to participate in the game.</p>
                         </li>
                       <li>
                             <p>No points for being included in the playing team, or being called on the field to play will be awarded. The only points that will be given will be based on the scores made during the play on the field.</p>
                          </li>
                       <li>
                          <p>The players will not be given any points for being included in the Starting 11 in Warm-up match formats.</p>
                  </li>
             </ul>
        </div>
      </div>
    </div>

    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">LIVE Fantasy Terms &amp; Conditions<img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse7" className="collapse" data-bs-parent="#accordion">
      <div className="card-body pointBody">
                                    <ul>
                                       <li>
                                          <p>A user is allowed to choose 7 players in LIVE FANTASY and 2nd Innings. Out of these seven players, a maximum of 6 players can be selected from one team. There is no restriction on mandatory selection of all-rounders, batters, bowlers or wicket keepers. A user will be allocated a total of 65 credit points to create a team.</p>
                                       </li>
                                       <li>
                                          <p>Users will be asked to choose four players from their team who will fetch 4x,3x,2x and 1.5x points, respectively. Rest of the three players will fetch 1x points. Unlike normal fantasy where a user gets to choose Captain and Vice-Captain for 2x and 1.5x points respectively, it is little different in LIVE fantasy.</p>
                                       </li>
                                       <li>
                                          <p>Please note that users have to create separate teams for each LIVE fantasy slot and 2nd Innings.</p>
                                       </li>
                                       <li>
                                          <p>The stats (runs, wicket, strike rate, economy rate etc.) of the players will vary for each category. For example, a batsman who is batting from 1st over and plays till the 10th over and if a user plays LIVE fantasy in 5.1 to 9.6 over, the stats will be considered only for the chosen slot, which is 5.1-9.6 over.</p>
                                       </li>
                                       <li>
                                          <p>MyTeam11 will declare the match complete in two conditions: Either 40% of the balls in the selected slot of LIVE fantasy must be bowled or the live match must be declared complete, even if 40% balls are not bowled.<br/>For instance, if the live match is completed or declared complete (by Officials) before 40% of the balls in your selected slot/innings are bowled, MyTeam11 will declare the slot /innings complete. Also, the result of the selected slot/innings will be declared on MyTeam11 application on the ongoing LIVE match if 40% of the balls are bowled or the live match is declared complete before 40% balls are bowled.</p>
                                       </li>
                                       <li>
                                          <p>MyTeam11, at its discretion, can adjust the deadline of the selected slot/innings on the app by up to 6 balls before the beginning of the LIVE match.</p>
                                       </li>
                                       <li>
                                          <p>A user can check the scorecard and ranking of LIVE FANTASY in the respective category tabs.</p>
                                       </li>
                                       <li>
                                          <p>If a user chooses to make the fantasy team in the second innings, fantasy points will be offered only for the players’ performance in the 2nd innings.</p>
                                       </li>
                                       <li>
                                          <p>Stats, leagues, contests for every category will be different and not be clubbed at any circumstance.</p>
                                       </li>
                                       <li>
                                          <p>Fantasy points of first and second innings cannot be clubbed together.</p>
                                       </li>
                                       <li>
                                          <p>Entry fees and league size for live fantasy will vary respectively.</p>
                                       </li>
                                       <li>
                                          <p>The points system for each category remains unchanged.</p>
                                       </li>
                                       <li>
                                          <p>Please note that MyTeam11 will not be liable for any fluctuations in the scorecard after the chosen slot of LIVE fantasy is completed. MyTeam11 will not be responsible for users’ ranking caused by fluctuations in the respective scorecards.</p>
                                       </li>
                                    </ul>
                                 </div>
                                 </div>
                                 </div>
                                 
                            


                                    


                        </div>
                      </div>
                      
                      <div className={`tab-pane ${activeSubTab === 'T10' ? 'show active' : ''}`} id="home" role="tabpanel">
                        <div className="w-100">
                          <div className="card">
                            <button className="header" onClick={toggleCollapse}>
                              Batting Points <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" alt="Caret Down" />
                            </button>
                            <div className={`collapse ${isCollapsed ? '' : 'show'}`} data-bs-parent="#accordion">
                              <div className="card-body pointBody">
                                <table className="table pointTable">
                                  <thead>
                                    <tr>
                                      <th scope="col">Type</th>
                                      <th scope="col">Point</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Run</td>
                                      <td className="bggreen">+1</td>
                                    </tr>
                                    <tr>
                                      <td>Playing 11</td>
                                      <td className="bggreen">+2</td>
                                    </tr>
                                    <tr>
                                      <td>Boundary Bonus</td>
                                      <td className="bggreen">+1</td>
                                    </tr>
                                    <tr>
                                      <td>Six Bonus</td>
                                      <td className="bggreen">+2</td>
                                    </tr>
                                    <tr>
                                      <td>30 Runs Bonus</td>
                                      <td className="bggreen">NA</td>
                                    </tr>
                                    <tr>
                                      <td>Half-century Bonus</td>
                                      <td className="bggreen red">+2</td>
                                    </tr>
                                    <tr>
                                      <td>Century Bonus</td>
                                      <td className="bggreen">+4</td>
                                    </tr>
                                    <tr>
                                      <td>150-run Bonus</td>
                                      <td className="bggreen">+8</td>
                                    </tr>
                                    <tr>
                                      <td>200-run Bonus</td>
                                      <td className="bggreen">+16</td>
                                    </tr>
                                    <tr>
                                      <td>Dismissal For A Duck (Wicket-keeper, All-rounder & Batsman)</td>
                                      <td className="bggreen red">-2</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p>The dismissal for a duck shall be given to any player coming to the field to bat and getting out scoring 0 runs.</p>
                              </div>
                            </div>
                          </div>
                        
 
   
    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">Bowling Points <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse2" className="collapse" data-bs-parent="#accordion">
        <div className="card-body pointBody">
          <table className="table pointTable">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wicket (excluding run out)</td>
                <td className="bggreen">+10</td>
              </tr>
              <tr>
                <td>2-wicket haul bonus</td>
                <td className="bggreen red">-20</td>
              </tr>
              <tr>
                <td>3-wicket haul bonus</td>
                <td className="bggreen">+2</td>
              </tr>
              <tr>
                <td>4-wicket haul bonus</td>
                <td className="bggreen">+12</td>
              </tr>
              <tr>
                <td>5-wicket haul bonus</td>
                <td className="bggreen red">-8</td>
              </tr>
              <tr>
                <td>10-wicket haul bonus</td>
                <td className="bggreen">+12</td>
              </tr>
              <tr>
                <td>Maiden over</td>
                <td className="bggreen">NA</td>
              </tr>
              <tr>
                <td>Bonus (LBW/Bowled)</td>
                <td className="bggreen">+5</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              <p>No fantasy points will be awarded for a maiden over bowled in <b>The Hundred Cricket Tournament</b>.</p>
            </li>
            <li>
              <p>Wicket (excluding run-out) includes stumped, caught out, and hit wicket. In case of a Run-out, the points for the wicket are given to the person who throws the ball. However, in a case where the batsman is stumped, the points are awarded to the wicketkeeper and the bowler is awarded points for a wicket.</p>
            </li>
            <li>
              <p>Bonus points for 10-wicket haul will be awarded at the end of the 2nd innings of the match. The points for 10-wicket haul shall only be awarded for Test matches.</p>
            </li>
            <li>
              <p>Any player qualifying for 10-wicket haul along with any other haul like 2-wicket, 3-wicket, 4-wicket or 5-wicket shall get bonus points for the 10-wicket haul as well as the other qualifying haul.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">Fielding Points <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse3" className="collapse" data-bs-parent="#accordion">
        <div className="card-body pointBody">
          <table className="table pointTable">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Catch</td>
                <td className="bggreen">+8</td>
              </tr>
              <tr>
                <td>Stumping</td>
                <td className="bggreen">+10</td>
              </tr>
              <tr>
                <td>Runout (Direct)</td>
                <td className="bggreen">+10</td>
              </tr>
              <tr>
                <td>Runout (Not a direct hit)</td>
                <td className="bggreen">+6/6</td>
              </tr>
              <tr>
                <td>3 catch haul bonus</td>
                <td className="bggreen">+2</td>
              </tr>
              <tr>
                <td>4 catch haul bonus</td>
                <td className="bggreen">+4</td>
              </tr>
              <tr>
                <td>5 catch haul bonus</td>
                <td className="bggreen">+6</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              <p>Any fielder catching three or more catches in an inning shall be awarded a catch-haul bonus. The bonus shall only be applicable in case the total number of catches by a player in a particular inning qualifies for the bonus.</p>
            </li>
            <li>
              <p>The points for Runout (not a direct hit) will be split equally among the last 2 players involved.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">Other Terms & Conditions <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse4" className="collapse" data-bs-parent="#accordion">
        <div className="card-body pointBody">
          <ul>
            <li>
              <p>The captain and vice-captain you choose to lead your team are awarded 2x and 1.5x points of the original total they score. However, any penalty points for a duck or dismissal shall not apply to the captain and vice-captain.</p>
            </li>
            <li>
              <p>All the scoring above mentioned will be applied for both practice and live matches, except in cases where the match is abandoned or canceled.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="diverder"></div>

    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">Impact and X-factor substitutes player rules<img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse5" className="collapse" data-bs-parent="#accordion">
       <div className="card-body pointBody">
  <h6>Impact player substitutes rules:</h6>
  <ul>
    <li>
      <p>Only those Impact players will receive +2 points, who are called upon during the match to replace a member of the Playing XI. They will also score points as per MyTeam11's Fantasy Point System, if and when they contribute to the match.</p>
    </li>
    <li>
      <p>Substitutes that are not categorised as Concussion substitutes, X-factor substitutes or Impact Player substitutes will not score or receive any points for their contribution to the match.</p>
    </li>
  </ul>
  <div className="table-responsive">
    <table className="table table-bordered">
      <tbody>
        <tr>
          <th colSpan="2" style={{ textAlign: 'center' }}>Additional Points</th>
        </tr>
        <tr>
          <td>Impact Player Substitutes</td>
          <td className="bggreen">+2</td>
        </tr>
      </tbody>
    </table>
  </div>
  <h6>X-factor substitutes rules:</h6>
  <div className="cricket-points">
    <ul>
      <li>
        <p>The 'X-factor Player' rule will be only applicable to the Australian T20 League. According to this rule, a team can replace a player from the initial XI with the 12th or 13th man on the team sheet. The X Factor player will be available after completion of 10th over of 1st inning. The player who is being replaced hasn't bowled more than one over or hasn't batted yet in the game.</p>
      </li>
    </ul>
  </div>
  <div className="table-responsive">
    <table className="table table-bordered">
      <tbody>
        <tr>
          <th colSpan="2" style={{ textAlign: 'center' }}>Additional Points</th>
        </tr>
        <tr>
          <td>Substitute added through X-factor in Australia T20 League</td>
          <td className="bggreen">+2</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="cricket-points">
    <ul>
      <li>
        <p>Any X-factor player will be given +2 points only when the player makes an on-field appearance as a substitute and rest of the points will be given on the basis of his in-game performance.</p>
      </li>
      <li>
        <p>Please note that the fantasy points system of normal fantasy &amp; live fantasy are same.</p>
      </li>
    </ul>
  </div>
  <div className="cricket-points">
    <ul>
      <li>
        <p>The fantasy points system of <b>Sixty Ball Championship</b> is similar to <b>T-10</b> format.</p>
      </li>
    </ul>
  </div>
</div>

      </div>
    </div>
    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">For Warm - Up Matches<img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse6" className="collapse" data-bs-parent="#accordion">
      <div className="card-body pointBody">
                      <ul>
                             <li>
                            <p>MyTeam11 allows a total of over 11 players from either side of the competing duo to participate in the game.</p>
                         </li>
                       <li>
                             <p>No points for being included in the playing team, or being called on the field to play will be awarded. The only points that will be given will be based on the scores made during the play on the field.</p>
                          </li>
                       <li>
                          <p>The players will not be given any points for being included in the Starting 11 in Warm-up match formats.</p>
                  </li>
             </ul>
        </div>
      </div>
    </div>

    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">LIVE Fantasy Terms &amp; Conditions<img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse7" className="collapse" data-bs-parent="#accordion">
      <div className="card-body pointBody">
                                    <ul>
                                       <li>
                                          <p>A user is allowed to choose 7 players in LIVE FANTASY and 2nd Innings. Out of these seven players, a maximum of 6 players can be selected from one team. There is no restriction on mandatory selection of all-rounders, batters, bowlers or wicket keepers. A user will be allocated a total of 65 credit points to create a team.</p>
                                       </li>
                                       <li>
                                          <p>Users will be asked to choose four players from their team who will fetch 4x,3x,2x and 1.5x points, respectively. Rest of the three players will fetch 1x points. Unlike normal fantasy where a user gets to choose Captain and Vice-Captain for 2x and 1.5x points respectively, it is little different in LIVE fantasy.</p>
                                       </li>
                                       <li>
                                          <p>Please note that users have to create separate teams for each LIVE fantasy slot and 2nd Innings.</p>
                                       </li>
                                       <li>
                                          <p>The stats (runs, wicket, strike rate, economy rate etc.) of the players will vary for each category. For example, a batsman who is batting from 1st over and plays till the 10th over and if a user plays LIVE fantasy in 5.1 to 9.6 over, the stats will be considered only for the chosen slot, which is 5.1-9.6 over.</p>
                                       </li>
                                       <li>
                                          <p>MyTeam11 will declare the match complete in two conditions: Either 40% of the balls in the selected slot of LIVE fantasy must be bowled or the live match must be declared complete, even if 40% balls are not bowled.<br/>For instance, if the live match is completed or declared complete (by Officials) before 40% of the balls in your selected slot/innings are bowled, MyTeam11 will declare the slot /innings complete. Also, the result of the selected slot/innings will be declared on MyTeam11 application on the ongoing LIVE match if 40% of the balls are bowled or the live match is declared complete before 40% balls are bowled.</p>
                                       </li>
                                       <li>
                                          <p>MyTeam11, at its discretion, can adjust the deadline of the selected slot/innings on the app by up to 6 balls before the beginning of the LIVE match.</p>
                                       </li>
                                       <li>
                                          <p>A user can check the scorecard and ranking of LIVE FANTASY in the respective category tabs.</p>
                                       </li>
                                       <li>
                                          <p>If a user chooses to make the fantasy team in the second innings, fantasy points will be offered only for the players’ performance in the 2nd innings.</p>
                                       </li>
                                       <li>
                                          <p>Stats, leagues, contests for every category will be different and not be clubbed at any circumstance.</p>
                                       </li>
                                       <li>
                                          <p>Fantasy points of first and second innings cannot be clubbed together.</p>
                                       </li>
                                       <li>
                                          <p>Entry fees and league size for live fantasy will vary respectively.</p>
                                       </li>
                                       <li>
                                          <p>The points system for each category remains unchanged.</p>
                                       </li>
                                       <li>
                                          <p>Please note that MyTeam11 will not be liable for any fluctuations in the scorecard after the chosen slot of LIVE fantasy is completed. MyTeam11 will not be responsible for users’ ranking caused by fluctuations in the respective scorecards.</p>
                                       </li>
                                    </ul>
                                 </div>
                                 </div>
                                 </div>
                        </div>
                      </div>
                      <div className={`tab-pane ${activeSubTab === 'Hundred' ? 'show active' : ''}`} id="home" role="tabpanel">
                        <div className="w-100">
                          <div className="card">
                            <button className="header" onClick={toggleCollapse}>
                              Batting Points <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" alt="Caret Down" />
                            </button>
                            <div className={`collapse ${isCollapsed ? '' : 'show'}`} data-bs-parent="#accordion">
                              <div className="card-body pointBody">
                                <table className="table pointTable">
                                  <thead>
                                    <tr>
                                      <th scope="col">Type</th>
                                      <th scope="col">Point</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Run</td>
                                      <td className="bggreen">+1</td>
                                    </tr>
                                    <tr>
                                      <td>Playing 11</td>
                                      <td className="bggreen">+2</td>
                                    </tr>
                                    <tr>
                                      <td>Boundary Bonus</td>
                                      <td className="bggreen">+1</td>
                                    </tr>
                                    <tr>
                                      <td>Six Bonus</td>
                                      <td className="bggreen">+2</td>
                                    </tr>
                                    <tr>
                                      <td>30 Runs Bonus</td>
                                      <td className="bggreen">NA</td>
                                    </tr>
                                    <tr>
                                      <td>Half-century Bonus</td>
                                      <td className="bggreen red">+2</td>
                                    </tr>
                                    <tr>
                                      <td>Century Bonus</td>
                                      <td className="bggreen">+4</td>
                                    </tr>
                                    <tr>
                                      <td>150-run Bonus</td>
                                      <td className="bggreen">+8</td>
                                    </tr>
                                    <tr>
                                      <td>200-run Bonus</td>
                                      <td className="bggreen">+16</td>
                                    </tr>
                                    <tr>
                                      <td>Dismissal For A Duck (Wicket-keeper, All-rounder & Batsman)</td>
                                      <td className="bggreen red">-2</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p>The dismissal for a duck shall be given to any player coming to the field to bat and getting out scoring 0 runs.</p>
                              </div>
                            </div>
                          </div>
                        
 
   
    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">Bowling Points <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse2" className="collapse" data-bs-parent="#accordion">
        <div className="card-body pointBody">
          <table className="table pointTable">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wicket (excluding run out)</td>
                <td className="bggreen">+10</td>
              </tr>
              <tr>
                <td>2-wicket haul bonus</td>
                <td className="bggreen red">-20</td>
              </tr>
              <tr>
                <td>3-wicket haul bonus</td>
                <td className="bggreen">+2</td>
              </tr>
              <tr>
                <td>4-wicket haul bonus</td>
                <td className="bggreen">+12</td>
              </tr>
              <tr>
                <td>5-wicket haul bonus</td>
                <td className="bggreen red">-8</td>
              </tr>
              <tr>
                <td>10-wicket haul bonus</td>
                <td className="bggreen">+12</td>
              </tr>
              <tr>
                <td>Maiden over</td>
                <td className="bggreen">NA</td>
              </tr>
              <tr>
                <td>Bonus (LBW/Bowled)</td>
                <td className="bggreen">+5</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              <p>No fantasy points will be awarded for a maiden over bowled in <b>The Hundred Cricket Tournament</b>.</p>
            </li>
            <li>
              <p>Wicket (excluding run-out) includes stumped, caught out, and hit wicket. In case of a Run-out, the points for the wicket are given to the person who throws the ball. However, in a case where the batsman is stumped, the points are awarded to the wicketkeeper and the bowler is awarded points for a wicket.</p>
            </li>
            <li>
              <p>Bonus points for 10-wicket haul will be awarded at the end of the 2nd innings of the match. The points for 10-wicket haul shall only be awarded for Test matches.</p>
            </li>
            <li>
              <p>Any player qualifying for 10-wicket haul along with any other haul like 2-wicket, 3-wicket, 4-wicket or 5-wicket shall get bonus points for the 10-wicket haul as well as the other qualifying haul.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">Fielding Points <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse3" className="collapse" data-bs-parent="#accordion">
        <div className="card-body pointBody">
          <table className="table pointTable">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Catch</td>
                <td className="bggreen">+8</td>
              </tr>
              <tr>
                <td>Stumping</td>
                <td className="bggreen">+10</td>
              </tr>
              <tr>
                <td>Runout (Direct)</td>
                <td className="bggreen">+10</td>
              </tr>
              <tr>
                <td>Runout (Not a direct hit)</td>
                <td className="bggreen">+6/6</td>
              </tr>
              <tr>
                <td>3 catch haul bonus</td>
                <td className="bggreen">+2</td>
              </tr>
              <tr>
                <td>4 catch haul bonus</td>
                <td className="bggreen">+4</td>
              </tr>
              <tr>
                <td>5 catch haul bonus</td>
                <td className="bggreen">+6</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              <p>Any fielder catching three or more catches in an inning shall be awarded a catch-haul bonus. The bonus shall only be applicable in case the total number of catches by a player in a particular inning qualifies for the bonus.</p>
            </li>
            <li>
              <p>The points for Runout (not a direct hit) will be split equally among the last 2 players involved.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">Other Terms & Conditions <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse4" className="collapse" data-bs-parent="#accordion">
        <div className="card-body pointBody">
          <ul>
            <li>
              <p>The captain and vice-captain you choose to lead your team are awarded 2x and 1.5x points of the original total they score. However, any penalty points for a duck or dismissal shall not apply to the captain and vice-captain.</p>
            </li>
            <li>
              <p>All the scoring above mentioned will be applied for both practice and live matches, except in cases where the match is abandoned or canceled.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="diverder"></div>

    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">Impact and X-factor substitutes player rules<img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse5" className="collapse" data-bs-parent="#accordion">
       <div className="card-body pointBody">
  <h6>Impact player substitutes rules:</h6>
  <ul>
    <li>
      <p>Only those Impact players will receive +2 points, who are called upon during the match to replace a member of the Playing XI. They will also score points as per MyTeam11's Fantasy Point System, if and when they contribute to the match.</p>
    </li>
    <li>
      <p>Substitutes that are not categorised as Concussion substitutes, X-factor substitutes or Impact Player substitutes will not score or receive any points for their contribution to the match.</p>
    </li>
  </ul>
  <div className="table-responsive">
    <table className="table table-bordered">
      <tbody>
        <tr>
          <th colSpan="2" style={{ textAlign: 'center' }}>Additional Points</th>
        </tr>
        <tr>
          <td>Impact Player Substitutes</td>
          <td className="bggreen">+2</td>
        </tr>
      </tbody>
    </table>
  </div>
  <h6>X-factor substitutes rules:</h6>
  <div className="cricket-points">
    <ul>
      <li>
        <p>The 'X-factor Player' rule will be only applicable to the Australian T20 League. According to this rule, a team can replace a player from the initial XI with the 12th or 13th man on the team sheet. The X Factor player will be available after completion of 10th over of 1st inning. The player who is being replaced hasn't bowled more than one over or hasn't batted yet in the game.</p>
      </li>
    </ul>
  </div>
  <div className="table-responsive">
    <table className="table table-bordered">
      <tbody>
        <tr>
          <th colSpan="2" style={{ textAlign: 'center' }}>Additional Points</th>
        </tr>
        <tr>
          <td>Substitute added through X-factor in Australia T20 League</td>
          <td className="bggreen">+2</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="cricket-points">
    <ul>
      <li>
        <p>Any X-factor player will be given +2 points only when the player makes an on-field appearance as a substitute and rest of the points will be given on the basis of his in-game performance.</p>
      </li>
      <li>
        <p>Please note that the fantasy points system of normal fantasy &amp; live fantasy are same.</p>
      </li>
    </ul>
  </div>
  <div className="cricket-points">
    <ul>
      <li>
        <p>The fantasy points system of <b>Sixty Ball Championship</b> is similar to <b>T-10</b> format.</p>
      </li>
    </ul>
  </div>
</div>

      </div>
    </div>
    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">For Warm - Up Matches<img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse6" className="collapse" data-bs-parent="#accordion">
      <div className="card-body pointBody">
                      <ul>
                             <li>
                            <p>MyTeam11 allows a total of over 11 players from either side of the competing duo to participate in the game.</p>
                         </li>
                       <li>
                             <p>No points for being included in the playing team, or being called on the field to play will be awarded. The only points that will be given will be based on the scores made during the play on the field.</p>
                          </li>
                       <li>
                          <p>The players will not be given any points for being included in the Starting 11 in Warm-up match formats.</p>
                  </li>
             </ul>
        </div>
      </div>
    </div>

    <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">LIVE Fantasy Terms &amp; Conditions<img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" /></button>
      <div id="collapse7" className="collapse" data-bs-parent="#accordion">
      <div className="card-body pointBody">
                                    <ul>
                                       <li>
                                          <p>A user is allowed to choose 7 players in LIVE FANTASY and 2nd Innings. Out of these seven players, a maximum of 6 players can be selected from one team. There is no restriction on mandatory selection of all-rounders, batters, bowlers or wicket keepers. A user will be allocated a total of 65 credit points to create a team.</p>
                                       </li>
                                       <li>
                                          <p>Users will be asked to choose four players from their team who will fetch 4x,3x,2x and 1.5x points, respectively. Rest of the three players will fetch 1x points. Unlike normal fantasy where a user gets to choose Captain and Vice-Captain for 2x and 1.5x points respectively, it is little different in LIVE fantasy.</p>
                                       </li>
                                       <li>
                                          <p>Please note that users have to create separate teams for each LIVE fantasy slot and 2nd Innings.</p>
                                       </li>
                                       <li>
                                          <p>The stats (runs, wicket, strike rate, economy rate etc.) of the players will vary for each category. For example, a batsman who is batting from 1st over and plays till the 10th over and if a user plays LIVE fantasy in 5.1 to 9.6 over, the stats will be considered only for the chosen slot, which is 5.1-9.6 over.</p>
                                       </li>
                                       <li>
                                          <p>MyTeam11 will declare the match complete in two conditions: Either 40% of the balls in the selected slot of LIVE fantasy must be bowled or the live match must be declared complete, even if 40% balls are not bowled.<br/>For instance, if the live match is completed or declared complete (by Officials) before 40% of the balls in your selected slot/innings are bowled, MyTeam11 will declare the slot /innings complete. Also, the result of the selected slot/innings will be declared on MyTeam11 application on the ongoing LIVE match if 40% of the balls are bowled or the live match is declared complete before 40% balls are bowled.</p>
                                       </li>
                                       <li>
                                          <p>MyTeam11, at its discretion, can adjust the deadline of the selected slot/innings on the app by up to 6 balls before the beginning of the LIVE match.</p>
                                       </li>
                                       <li>
                                          <p>A user can check the scorecard and ranking of LIVE FANTASY in the respective category tabs.</p>
                                       </li>
                                       <li>
                                          <p>If a user chooses to make the fantasy team in the second innings, fantasy points will be offered only for the players’ performance in the 2nd innings.</p>
                                       </li>
                                       <li>
                                          <p>Stats, leagues, contests for every category will be different and not be clubbed at any circumstance.</p>
                                       </li>
                                       <li>
                                          <p>Fantasy points of first and second innings cannot be clubbed together.</p>
                                       </li>
                                       <li>
                                          <p>Entry fees and league size for live fantasy will vary respectively.</p>
                                       </li>
                                       <li>
                                          <p>The points system for each category remains unchanged.</p>
                                       </li>
                                       <li>
                                          <p>Please note that MyTeam11 will not be liable for any fluctuations in the scorecard after the chosen slot of LIVE fantasy is completed. MyTeam11 will not be responsible for users’ ranking caused by fluctuations in the respective scorecards.</p>
                                       </li>
                                    </ul>
                                 </div>
                                 </div>
                                 </div>
                        </div>
                      </div>
                      

                      {/* Additional tabs and points for Football and Kabaddi can be added here */}
                      
                    </div>
                  </div>
                </div>
                <div className={`tab-content ${activeTab === 'Football' ? 'active' : ''}`} id="myTabContent">
                  <div className={`tabcontent ${activeTab === 'Football' ? 'active' : ''}`}>
                  <div className="mini-container">
   
   <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapsetab2" aria-expanded="true" aria-controls="collapsetab2">
         Playing Time <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg"/>
      </button>
      <div id="collapsetab2" className="collapse show" data-parent="#accordion">
         <div className="card-body pointBody">
            <table className="table pointTable onlyTable">
               <thead>
                  <tr>
                     <th scope="col">Type</th>
                     <th scope="col">Point</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Playing 11</td>
                     <td className="bggreen">+4</td>
                  </tr>
                  <tr>
                     <td>Substitute</td>
                     <td className="bggreen">+2</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
   
  
   <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapsetab22" aria-expanded="false" aria-controls="collapsetab22">
         Attack <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg"/>
      </button>
      <div id="collapsetab22" className="collapse" data-parent="#accordion">
         <div className="card-body pointBody">
            <table className="table pointTable">
               <thead>
                  <tr>
                     <th scope="col">Type</th>
                     <th scope="col">Point</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>For every goal scored GK/Defender</td>
                     <td className="bggreen">+60</td>
                  </tr>
                  <tr>
                     <td>For every goal scored Midfielder</td>
                     <td className="bggreen">+50</td>
                  </tr>
                  <tr>
                     <td>For every goal scored Forward</td>
                     <td className="bggreen">+40</td>
                  </tr>
                  <tr>
                     <td>For every assist</td>
                     <td className="bggreen">+20</td>
                  </tr>
                  <tr>
                     <td>For every 5 passes completed</td>
                     <td className="bggreen">+1</td>
                  </tr>
                  <tr>
                     <td>Chance Created</td>
                     <td className="bggreen">+3</td>
                  </tr>
                  <tr>
                     <td>For every shot on target</td>
                     <td className="bggreen">+6</td>
                  </tr>
               </tbody>
            </table>
            <ul>
               <li>
                  <p>The individual from the goal scoring team who makes the final pass prior to a goal is scored, is awarded Assists for the pass.</p>
               </li>
               <li>
                  <p>An Assist is awarded in a situation when:</p>
                  <ul>
                     <li>The pass was intentional and resulted in a goal.</li>
                     <li>The pass was unintentional but led to a goal.</li>
                  </ul>
               </li>
               <li>
                  <p>No assist is awarded in case:</p>
                  <ul>
                     <li>An opposing player touches the ball and changes its direction before the goal.</li>
                     <li>Multiple players touch the ball before the goal.</li>
                     <li>The goal scorer loses and regains possession of the ball.</li>
                  </ul>
               </li>
               <li>Additional conditions for assist points:</li>
               <ul>
                  <li>Winning a penalty or free kick.</li>
                  <li>Having a shot saved or blocked, resulting in a rebound goal.</li>
                  <li>A cross or pass leading to an own goal.</li>
               </ul>
               <p><b>Note</b>: Chance created points will not be awarded if assist points are given.</p>
            </ul>
         </div>
      </div>
   </div>
   
 
   <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapsetab23" aria-expanded="false" aria-controls="collapsetab23">
         Defense <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg"/>
      </button>
      <div id="collapsetab23" className="collapse" data-parent="#accordion">
         <div className="card-body pointBody">
            <table className="table pointTable">
               <thead>
                  <tr>
                     <th scope="col">Type</th>
                     <th scope="col">Point</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Clean sheet GK/Defender</td>
                     <td>+20</td>
                  </tr>
                  <tr>
                     <td>For every shot saved GK</td>
                     <td>+6</td>
                  </tr>
                  <tr>
                     <td>Interception Won</td>
                     <td>+4</td>
                  </tr>
                  <tr>
                     <td>For every penalty saved GK</td>
                     <td>+50</td>
                  </tr>
                  <tr>
                     <td>Successful tackles won</td>
                     <td>+4</td>
                  </tr>
               </tbody>
            </table>
            <p><b>Interception Won</b>: Stealing the ball from the opposing team and retaining possession.</p>
         </div>
      </div>
   </div>
   
   
   <div class="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapsetab24" aria-expanded="false" aria-controls="collapsetab24">
         Cards & Other Penalties <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg"/>
      </button>
      <div id="collapsetab24" className="collapse" data-parent="#accordion">
         <div className="card-body pointBody">
            <table className="table pointTable">
               <thead>
                  <tr>
                     <th scope="col">Type</th>
                     <th scope="col">Point</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Yellow card</td>
                     <td>-4</td>
                  </tr>
                  <tr>
                     <td>Red card</td>
                     <td>-10</td>
                  </tr>
                  <tr>
                     <td>Own goal</td>
                     <td>-8</td>
                  </tr>
                  <tr>
                     <td>Goals conceded GK/Defender</td>
                     <td>-2</td>
                  </tr>
                  <tr>
                     <td>Penalty missed</td>
                     <td>-20</td>
                  </tr>
               </tbody>
            </table>
            <ul>
               <li>Red card penalties continue after the player is off the field.</li>
               <li>Point deductions for a red card include any yellow card deductions.</li>
            </ul>
         </div>
      </div>
   </div>

   
   <div className="card">
      <button className="header" data-bs-toggle="collapse" data-bs-target="#collapsetab25" aria-expanded="false" aria-controls="collapsetab25">
         Other Terms & Conditions <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg"/>
      </button>
      <div id="collapsetab25" className="collapse" data-parent="#accordion">
         <div class="card-body pointBody">
            <ul>
               <li>Captain gets 2x points, and Vice-captain gets 1.5x points.</li>
               <li>Points awarded for players listed in the match lineup.</li>
               <li>No points for extra-time events; penalties are not considered.</li>
               <li>Data comes from credible sources and can change until the match status is 'Completed.'</li>
               <li>Points may fluctuate amid the match.</li>
            </ul>
         </div>
      </div>
   </div>
</div>

                  </div>
                </div>
                <div className={`tab-content ${activeTab === 'Kabaddi' ? 'active' : ''}`} id="myTabContent">
                  <div className={`tabcontent ${activeTab === 'Kabaddi' ? 'active' : ''}`}>
                  <div className="mini-container">
  <div className="card">
    <button
      className="header"
      data-bs-toggle="collapse"
      data-bs-target="#collapsetabthree1"
      aria-expanded="true"
      aria-controls="collapsetabthree1"
    >
      Playing Points <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" alt="caret down" />
    </button>
    <div id="collapsetabthree1" className="collapse show" data-parent="#accordion">
      <div className="card-body pointBody">
        <table className="table pointTable onlyTable">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Point</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Starting 7</td>
              <td className="bggreen">+6</td>
            </tr>
            <tr>
              <td>Substitute</td>
              <td className="bggreen">+2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div className="card">
    <button
      className="header"
      data-bs-toggle="collapse"
      data-bs-target="#collapsetabthree2"
      aria-expanded="false"
      aria-controls="collapsetabthree2"
    >
      Defending Points <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" alt="caret down" />
    </button>
    <div id="collapsetabthree2" className="collapse" data-parent="#accordion">
      <div className="card-body pointBody">
        <table className="table pointTable onlyTable">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Point</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Successful Tackle</td>
              <td className="bggreen">+15</td>
            </tr>
            <tr>
              <td>Super Tackle</td>
              <td className="bggreen">+6</td>
            </tr>
            <tr>
              <td>High 5</td>
              <td className="bggreen">+8</td>
            </tr>
            <tr>
              <td>Unsuccessful Tackle</td>
              <td className="bggreen red">-1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div className="card">
    <button
      className="header"
      data-bs-toggle="collapse"
      data-bs-target="#collapsetabthree3"
      aria-expanded="false"
      aria-controls="collapsetabthree3"
    >
      Raiding Points <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" alt="caret down" />
    </button>
    <div id="collapsetabthree3" className="collapse" data-parent="#accordion">
      <div className="card-body pointBody">
        <table className="table pointTable onlyTable">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Point</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Successful Raid Touch</td>
              <td className="bggreen">+6</td>
            </tr>
            <tr>
              <td>Raid Bonus</td>
              <td className="bggreen">+2</td>
            </tr>
            <tr>
              <td>Super Raid</td>
              <td className="bggreen">+3</td>
            </tr>
            <tr>
              <td>Super 10</td>
              <td className="bggreen">+3</td>
            </tr>
            <tr>
              <td>Unsuccessful Raid</td>
              <td className="bggreen red">-2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div className="card">
    <button
      className="header"
      data-bs-toggle="collapse"
      data-bs-target="#collapsetabthree4"
      aria-expanded="false"
      aria-controls="collapsetabthree4"
    >
      Penalty and Team Points <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" alt="caret down" />
    </button>
    <div id="collapsetabthree4" className="collapse" data-parent="#accordion">
      <div className="card-body pointBody">
        <table className="table pointTable">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Point</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pushing all out <small>(Opposition All Out)</small></td>
              <td className="bggreen">6</td>
            </tr>
            <tr>
              <td>Getting all out <small>(Own Team)</small></td>
              <td className="bggreen red">-3</td>
            </tr>
            <tr>
              <td>Green Card</td>
              <td className="bggreen red">-2</td>
            </tr>
            <tr>
              <td>Yellow Card</td>
              <td className="bggreen red">-4</td>
            </tr>
            <tr>
              <td>Red Card</td>
              <td className="bggreen red">-6</td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li>
            <p>
              <b>Note</b>: The points for Pushing All Out and Getting All out will be awarded only to the players who were part
              of the starting 7.
            </p>
          </li>
        </ul>
        <div
          className="only_series"
          style={{ maxWidth: '900px', margin: '0 auto', border: '1px solid #ccc', padding: '15px' }}
        >
          <p style={{ margin: 0 }}>
            <strong>
              <em>No points will be deducted for Unsuccessful Tackle in RKL.</em>
            </strong>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="diverder"></div>

  <div className="card">
    <button
      className="header"
      data-toggle="collapse"
      data-target="#collapsetabthree6"
      aria-expanded="false"
      aria-controls="collapsetabthree6"
    >
      Other Terms &amp; Conditions <img src="https://cdnwebsite.myteam11.in/mt11v5_images/CaretDown.svg" alt="caret down" />
    </button>
    <div id="collapsetabthree6" className="collapse" data-parent="#accordion">
      <div className="card-body pointBody">
        <ul>
          <li>
            <p>The player you select to be the captain of your team will be given 2x the points he scores.</p>
          </li>
          <li>
            <p>The player selected as the vice-captain of your team will be given 1.5x the points he scores.</p>
          </li>
          <li>
            <p>
              The players are awarded starting points on the basis of the announcements made regarding their inclusion in the
              playing team for the game. In a scenario wherein a player, after being included in the team sheet for the match is
              unable to start the match, the player will not be awarded any points. However, the points shall be awarded to any
              player who acts as a replacement of such players who were included in the team sheet, but were unable to start
              the match and participate in the game.
            </p>
          </li>
          <li>
            <p>In case a substitute joins the game, then the points for the substitutes will only be awarded for the first time he enters the field.</p>
          </li>
          <li>
            <p>In case of a super tackle, the points for the super tackle will be added to the points of a successful tackle and then given to the player, i.e., total points awarded are equal to 15 points for successful tackle + 6 points for a super tackle.</p>
          </li>
          <li>
            <p>For every opponent, a raider gets out or puts out he will be awarded points for the raid touch.</p>
          </li>
          <li>
            <p>The points for pushing all out will be assigned only to players of the starting 7.</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DownloadAppSection/>
      <Footer/>
    </>
  );
};

export default PointSystem;
