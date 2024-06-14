tinymce.init({
    selector: 'textarea',
    height: 300,
    width: 1200,
    plugins: 'template anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount mediaembed formatpainter linkchecker a11ychecker tinymcespellchecker powerpaste advcode mentions tinycomments',
    toolbar: 'template undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
    mergetags_list: [
      { value: 'First.Name', title: 'First Name' },
      { value: 'Email', title: 'Email' },
    ],
    templates: [{
      title: "Test Template",
      description: "Test Template",
      content: `
      <div class="text-center">
        <ol>
            <li>Promotion Period: 12:00PM on 1st June 2024 to 11:59AM on 1st July 2024 (GMT+8);</li>
            <li>Only available to MYR account members;</li>
            <li>First Deposit must be made within the Promotion Period;</li>
            <li>Have not made a withdrawal request before the Bonus is credited;</li>
            <li>Members must click on the “JOIN NOW” button to take part;</li>
            <li>A Bonus of up to MYR 988 based on the First Deposit amount will be credited within 48 hours;</li>
            <li>The Bonus and Qualifying Deposit amount used are subject to a 15 times rollover requirement within 90
                days on any 188BET products, except Casino in Poker.</li>
            <div>
                <p>Example:</p>
                <p><em>Deposit amount: MYR 3,600</em></p>
                <p><em>Bonus amount = MYR 3,600 x 28% = MYR 988 (capped at MYR 988)</em></p>
                <p><em>Deposit amount used to generate the bonus = MYR 988 / 28% = MYR 3,529</em></p>
                <p><em>Deposit amounts not used for the promotion = MYR 3,600 – MYR 3,529 = MYR 71</em></p>
                <p><em>Rollover requirement = (MYR 3,529 + MYR 988) x 15 + MYR 71 = MYR 67,820</em></p>
            </div>
            <li>Full Promotion Specific Terms and Conditions Apply.</li>
        </ol>
        <div>
            <div>Full Promotion Specific Term and Conditions</div>
            <ol>
                <li>MYR 988 First Deposit Bonus promotion ("Promotion") runs from 1st June 2024 at 12:00PM (GMT+8) to
                    1st July 2024 11:59AM (GMT+8) ("Promotion Period").</li>
                <li>To be eligible for the Promotion, members must meet all criteria below (“Qualified Member”):</li>
                <ol>
                    <li>Have chosen MYR as their preferred currency,</li>
                    <li>Have made their first approved deposit to their 188BET account during the promotion period.</li>
                </ol>
                <li>Qualified members will be awarded with a 28% bonus based on their first approved deposit amount made
                    during the Promotion Period, up to a maximum of MYR 988, as illustrated below:
                    <table>
                        <tr>
                            <td style="border: 1px solid black;">hello</td>
                        </tr>
                    </table>
                </li>
                <li>The Qualified Member is required to click on the “JOIN NOW” button within the Promotion-Specific
                    Terms and Conditions page upon login to their 188BET account at www.188BET.com to claim the Bonus.
                </li>
                <li>The Qualified Member is not allowed to cancel the Bonus once it is credited to their 188BET account.
                </li>
                <li>The bonus received and deposit amount used to generate the bonus (“Qualifying Deposit”) by the
                    Qualified Member from the Promotion are subject to a 15 times rollover requirement in 188BET
                    Sportsbook, Casino, Live Casino, Keno, Lotto and/or Financials before any withdrawals can be made.
                    General withdrawal rule applies for all other deposit amounts not used for the Promotion.
                    For Example: Qualified Member A has made the first approved deposit during the Promotion Period with
                    an amount of MYR 3,600. Member A will be eligible to claim the deposit bonus.
                    <ul>
                        <li>Bonus amount = MYR 3,600 x 28% = capped to MYR 988</li>
                        <li>Deposit amount used to generate the bonus = MYR 988 / 28% = MYR 3,529</li>
                        <li>Deposit amounts not used for the promotion = MYR 3,600 – MYR 3,529 = MYR 71</li>
                    </ul>
                    Before any withdrawals can be made, Qualified Member A is subjected to rollover = (MYR 3,529 + MYR
                    988) x 15 + MYR 71 = MYR 67,820
                </li>
                <li>The Qualified Member is allowed to participate in only ONE (1) 188BET deposit-related promotion
                    during the Promotion Period. Should the Qualified Member seek to participate in more than ONE (1)
                    deposit-related promotion during the Promotion Period, only the first approved deposit received by
                    188BET from such Qualified Member for the relevant promotion will be considered valid and
                    participation in all other deposit-related promotions will be considered void.</li>
                <li>The Qualified Member will be disqualified from the Promotion if any withdrawals are made before the
                    Bonus is credited to their 188BET account.</li>
                <li>Only wagers in 188BET that generate a win/loss return will contribute to the rollover requirement.
                    Cancelled or void wagers, wagers on odds less than Euro 1.75 or Asia 0.75, or wagers on both
                    even-chances during a single game will not count towards this requirement.</li>
                <li>The rollover requirement will be considered fulfilled if the Qualified Member’s account balance is
                    less than the minimum stake amount allowed (i.e. MYR 5).</li>
                <li>188BET reserves the right to amend or withdraw the Promotion at any time.</li>
                <li>188BET is the sole arbiter of the Promotion and its decision is final.</li>
                <li>188BET Standard Terms and Conditions apply.</li>
                <p>The above are the terms and conditions of the promotion as organised by the operator, BestCommerce
                    Corporation, of the internet site found at www.188BET.com ('the Site'). By participating in this
                    promotion, you are deemed to have accepted the Promotion-Specific Terms and Conditions, and the
                    Promotion-General Terms and Conditions.. In the event of any discrepancy between the meaning of any
                    translated version of these Promotion-Specific Terms and Conditions and the English language
                    version, the English language version shall prevail. The operator reserves the right to cancel or
                    vary the promotion at any time without notice. The promoter in respect of the promotion is
                    BestCommerce Corporation. Last Updated Date: 04/04/2024 15:30:45</p>
            </ol>
        </div>
    </div>`,
    },
    {
        title: 'VN Template',
        description: 'VN Template',
        content: `<div id="content-en-gb" class="tnc-content-wrap">
        <div class="contentwrap tnc-content-format">
          <h2 class="mb-4 font-semibold text-body-1">Significant Conditions</h2>
          <ol class="list-lower-roman pl-8 mb-4">
            <li> Promotion Period runs from 02nd October 2023 at 08:00AM (GMT+8) to 30th October 2023 at 07:59AM (GMT+8); </li>
            <li> Qualified Members must place at least one (1) successful bet on any <strong>No Limit City slots games</strong> (excluding table games) during a Promotion Week of the Promotion Period to stand a chance to win a cash prize; </li>
            <li> Winners will be announced as follows: </li>
            <div class="border rounded mb-4 table-responsive">
              <table class="w-full border-collapse border-spacing-0 text-center">
                <tbody class="divide-y">
                  <tr>
                    <th>Winner Announcements</th>
                  </tr>
                  <tr>
                    <td>Promotion Week 1 – 11st October 2023</td>
                  </tr>
                  <tr>
                    <td>Promotion Week 2 – 18th October 2023</td>
                  </tr>
                  <tr>
                    <td>Promotion Week 3 – 25th October 2023</td>
                  </tr>
                  <tr>
                    <td>Promotion Week 4 – 1st November 2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <li> <strong>Promotion is <u>NOT</u> exclusive to 188BET Qualified Members only</strong>; </li>
            <li> <strong>No rollover requirement for the Cash Prize</strong>; </li>
            <li><strong> Full Promotion Specific Terms and Conditions Apply</strong>.</li>
          </ol>
          <SExpansionPanel
            class="last:rounded-b-lg border-0"
            header-class="bg-transparent"
            content-class="last:rounded-b-lg"
          >
            <template #header
              >
              <h2 class="m-4 font-semibold text-body-1">Full Promotion Specific Term and Conditions</h2>
            </template
            >
            <template #content>
              <div class="full-promotion-content">
                <ol class="list-decimal pl-8 my-4">
                  <li> The <strong>No Limit City - Cash X</strong> promotion (“Promotion”) runs from 02nd October 2023 at 08:00AM (GMT+8) to 30th October 2023 at 07:59AM (GMT+8) (“Promotion Period”). </li>
                  <li> The Promotion Period consists of <strong>four (4)</strong> separate promotion weeks, where each distinct promotion week begins every Monday at 08:00AM (GMT+8) and ends the following Monday at 07:59AM (GMT+8), as illustrated below (“Promotion Week”): </li>
                  <div class="border rounded mb-4 table-responsive">
                    <table class="w-full border-collapse border-spacing-0 text-center">
                      <tbody class="divide-y">
                        <tr>
                          <th>Promotion Week</th>
                          <th>Promotion Week Start and End Dates and Times (GMT+8)</th>
                        </tr>
                        <tr>
                          <td>Promotion Week 1</td>
                          <td>02nd October 2023 at 08:00AM – 09th October 2023 at 07:59AM</td>
                        </tr>
                        <tr>
                          <td>Promotion Week 2</td>
                          <td>09th October 2023 at 08:00AM – 16th October 2023 at 07:59AM</td>
                        </tr>
                        <tr>
                          <td>Promotion Week 3</td>
                          <td>16th October 2023 at 08:00AM – 23rd October 2023 at 07:59AM</td>
                        </tr>
                        <tr>
                          <td>Promotion Week 4</td>
                          <td>23rd October 2023 at 08:00AM – 30th October 2023 at 07:59AM</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <li> The Promotion is open to 188BET members who meet all the following criteria (“Qualified Member”): </li>
                  <ol class="list-lower-alpha pl-8">
                    <li>Have chosen <strong>VND or USD</strong> as their preferred currency,</li>
                    <li>Have placed at least one (1) successful bet on any <strong>No Limit City slot game</strong> (excluding table games) (“Qualifying Game”) during a Promotion Week of the Promotion Period (“Qualifying Bet”),</li>
                    <li>Any bets placed on the Qualifying Games during the Promotion Period which resulted in a win or loss will count towards the Qualifying Bet. Free spins, cancelled or void bets or bets placed in "Play for Fun" mode during the Promotion Period will not count towards the Qualifying Bet.</li>
                  </ol>
                  <li> Qualified Members who have placed at least one (1) Qualifying Bet during the Promotion Period will be automatically entered into this Promotion. </li>
                  <li> Qualified Members who successfully place a Qualifying Bet during Promotion Week 1 and Promotion Week 3 of the Promotion Period will stand a chance to randomly be rewarded with a cash drop prize, as illustrated below (“Cash Drop”): </li>
                  <div class="border rounded mb-4 table-responsive">
                    <table class="w-full border-collapse border-spacing-0 text-center">
                      <tbody class="divide-y">
                        <tr>
                          <th colspan="2" style="font-size: 1rem;">Promotion Week 1 Cash Drop – Winner Announcement Date – 11st October 2023</th>
                        </tr>
                        <tr>
                          <th colspan="2">Promotion Week 3 Cash Drop – Winner Announcement Date – 25th October 2023 </th>
                        </tr>
                        <tr>
                          <th>Number of Winners</th>
                          <th>Cash Drop Prizes</th>
                        </tr>
                        <tr>
                          <td>One (1)</td>
                          <td>One (1) VND 20,700,000 or USD 900 Cash Prize </td>
                        </tr>
                        <tr>
                          <td>Two (2)</td>
                          <td>One (1) VND 9,200,000 or USD 400 Cash Prize each </td>
                        </tr>
                        <tr>
                          <td>Two (2)</td>
                          <td>One (1) VND 4,600,000 or USD 200 Cash Prize each </td>
                        </tr>
                        <tr>
                          <td>Five (5)</td>
                          <td>One (1) VND 2,300,000 or USD 100 Cash Prize each </td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>One (1) VND 1,840,000 or USD 80 Cash Prize each </td>
                        </tr>
                        <tr>
                          <td>40</td>
                          <td>One (1) VND 575,000 or USD 25 Cash Prize each </td>
                        </tr>
                        <tr>
                          <td>40</td>
                          <td>One (1) VND 345,000 or USD 15 Cash Prize each </td>
                        </tr>
                        <tr>
                          <td>300</td>
                          <td>One (1) VND 230,000 or USD 10 Cash Prize each </td>
                        </tr>
                        <tr>
                          <td>1,000</td>
                          <td>One (1) VND 184,000 or USD 8 Cash Prize each </td>
                        </tr>
                        <tr>
                          <td>3,000</td>
                          <td>One (1) VND 69,000 or USD 3 Cash Prize each </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p><em>For example: <br/>
                    Qualified Member A placed a VND 50,000 Qualifying Bet during Promotion Week 1 and was randomly rewarded with a VND 4,600,000 Cash Prize. </em> </p>
                  <li> During Promotion Week 2 and Promotion Week 4, Qualified Members will be entered onto a leaderboard (“Leaderboard”) based upon their accumulated Qualifying Bet amount and the winners will be based upon those with the highest accumulated Qualifying Bet amount at the end of each Promotion Week, as illustrated below: </li>
                  <div class="border rounded mb-4 table-responsive">
                    <table class="w-full border-collapse border-spacing-0 text-center">
                      <tbody class="divide-y">
                        <tr>
                          <th colspan="2">Leaderboard Promotion Week 2 &amp; Week 4</th>
                        </tr>
                        <tr>
                          <th>Requirement</th>
                          <th>Winners</th>
                        </tr>
                        <tr>
                          <td>Place one (1) successful bet on any <strong>No Limit City slot games</strong> during Promotion Week 2 or 4 of the Promotion Period.</td>
                          <td>Winners are based upon the participant with the highest accumulated Qualifying Bet amount at the end of the Promotion Week</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <li> Qualified Members who have successfully been entered onto the Leaderboard, as detailed in clause 6, will stand a chance to win a cash prize (“Cash Prize”) based on their Leaderboard position at the end of Promotion Week 2 and 4, as illustrated below: </li>
                  <div class="border rounded mb-4 table-responsive">
                    <table class="w-full border-collapse border-spacing-0 text-center">
                      <tbody class="divide-y">
                        <tr>
                          <th colspan="3" style="font-size: 1rem;">Promotion Week 2 Leaderboard – Winner Announcement Date – 18th October 2023</th>
                        </tr>
                        <tr>
                          <th colspan="3"> Promotion Week 4 Leaderboard – Winner Announcement Date – 1st November 2023</th>
                        </tr>
                        <tr>
                          <th>Rank</th>
                          <th>No. of Winners</th>
                          <th>Cash Prize</th>
                        </tr>
                        <tr>
                          <td>1st</td>
                          <td>One (1)</td>
                          <td>One (1) VND 23,000,000 or USD 1,000 Cash Prize </td>
                        </tr>
                        <tr>
                          <td>2nd</td>
                          <td>One (1)</td>
                          <td>One (1) VND 16,100,000 or USD 700 Cash Prize </td>
                        </tr>
                        <tr>
                          <td>3rd</td>
                          <td>One (1)</td>
                          <td>One (1) VND 6,900,000 or USD 300 Cash Prize </td>
                        </tr>
                        <tr>
                          <td>4th - 5th </td>
                          <td>Two (2)</td>
                          <td>One (1) VND 2,300,000 or USD 100 Cash Prize each </td>
                        </tr>
                        <tr>
                          <td>6th - 20th</td>
                          <td>15</td>
                          <td>One (1) VND 1,610,000 or USD 70 Cash Prize each </td>
                        </tr>
                        <tr>
                          <td>21st - 80th</td>
                          <td>60</td>
                          <td>One (1) VND 1,150,000 or USD 50 Cash Prize each </td>
                        </tr>
                        <tr>
                          <td>81st - 200th</td>
                          <td>120</td>
                          <td>One (1) VND 575,000 or USD 25 Cash Prize each </td>
                        </tr>
                        <tr>
                          <td>201st - 700th </td>
                          <td>500</td>
                          <td>One (1) VND 345,000 or USD 15 Cash Prize each </td>
                        </tr>
                        <tr>
                          <td>701st - 1,700th</td>
                          <td>1,000</td>
                          <td>One (1) VND 115,000 or USD 5 Cash Prize each </td>
                        </tr>
                        <tr>
                          <td>1,701st - 2,975th</td>
                          <td>1,275</td>
                          <td>One (1) VND 69,000 or USD 3 Cash Prize each </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p><em>For example: <br/>
                    Qualified Member A placed an accumulated Qualifying Bet amount of VND 50,000,000 during Promotion Week 2 and was ranked as 3rd on the Leaderboard at the end of Promotion Week 2. 
                    Qualified Member A would receive a VND 6,900,000 Cash Prize. </em> </p>
                  <li> <strong>The Promotion is <u>NOT</u> exclusive to 188BET Qualified Members only</strong>. </li>
                  <li> A total of 14,750 participants will be selected as winners (“Winner”) during the Promotion Period, as follow: 8,800 Cash Drop Winners and 5,950 Leaderboard Winners. The Winners will be announced at the end of each Promotion Week of the Promotion Period. </li>
                  <li> The Leaderboard and Cash Drop Winners are entitled to participate again in the Promotion during any subsequent Promotion Weeks. </li>
                  <li> Qualified Members can only receive a maximum of one (1) Cash Prize during each Promotion Week of the Promotion Period. </li>
                  <li> If a 188BET Qualified Member is a Winner, the Cash Prize will be credited to the Winner's 188BET account within 72 working hours of the ‘Winners’ result. </li>
                  <li> There is <strong>no rollover requirement</strong> for the Cash Prize. The Cash Prize is available for immediate play on any 188BET products or withdrawal, subject to any necessary verifications. </li>
                  <li> The Winner is <strong>not</strong> allowed to cancel the cash prize once they are credited to their 188BET account. </li>
                  <li> Any decision regarding the Prizes and the Winners is final. </li>
                  <li> 188BET reserves the right to amend or withdraw the Promotion at any time. </li>
                  <li> <a :href="//promotions#promo_gen_terms">188BET Promotion General Terms &amp; Conditions</a> apply. </li>
                  <li> <a :href="//corporate-affairs/terms-and-conditions">188BET Standard Term and Conditions</a> apply.</li>
                </ol>
              </div>
            </template>
          </SExpansionPanel>
        </div>
        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
      </div>`
    }
],
  });

  function getHtmlContent() {
    var content = tinymce.get('mytextarea').getContent(); // Replace 'myTextarea' with the ID of your textarea
    //console.log(content); // You can use this content as needed
    //document.getElementById('htmlOutput').innerHTML = content; // Display the HTML output on the page
    let blob = new Blob([content], {type: 'text/html'});
    let htmlFile = document.createElement('a');
    htmlFile.download = 'try.html';
    htmlFile.href = window.URL.createObjectURL(blob);
    htmlFile.click()
}

window.addEventListener('click', (e) => {
    console.log(e.target.parentElement.parentElement.parentElement);
});

