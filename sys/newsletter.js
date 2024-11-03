let newsletterInput = document.getElementById('newsletter-filename');
let htmlTitle = document.getElementById('html-title');
let gameBanner = document.getElementById('game-banner');
let gameIcon = document.getElementById('game-icon');
let gameTitle = document.getElementById('game-title');
let gameSub = document.getElementById('game-sub');
let buttonLink = document.getElementById('game-link');
let gamePreview = document.getElementById('game-preview');

const header = `
                <table style="box-sizing: border-box; margin: 0 auto;">
                    <tr style="box-sizing: border-box;">
                        <td style="box-sizing: border-box;">
                            <img referrerpolicy="no-referrer-when-downgrade" src="https://matomo-u-188.ourbiworld.com/matomo.php?idsite=1&rec=1&bots=1&url=https%3A%2F%2F188bet.blue%2Femail-opened%26action_name%3DEmail%20opened%26mtm_campaign%3DNewsletter%20Email%26mtm_keyword%3DNewsletter%20MKT" style="box-sizing: border-box; border: 0;" alt>
                            <img referrerpolicy="no-referrer-when-downgrade" src="https://matomo-u-188.ourbiworld.com/matomo.php?idsite=1&rec=1&bots=1&url=https%3A%2F%2F188bet.blue%2Femail-opened%26action_name%3DEmail%20opened%26mtm_campaign%3DNewsletter%20Email%26mtm_keyword%3DSystem%20Email" style="box-sizing: border-box; border: 0;" alt>
                            <img id="dark-logo" style="box-sizing: border-box; width: 80px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188.png" width="80">
                        </td>
                    </tr>
                </table>`
const footer = `
                <!--Footer-->
                <button style="padding: 0; background-color: transparent; border: none; width: 100%; max-width: 600px; border-radius: 8px 8px 0 0; margin: 0 auto; overflow: hidden;">
                    <!-- <table class="footer-parent-table" cellspacing="0" cellpadding="0" style="background-color: #0b0b0b; height: auto; width: 100%; max-width: 600px; border-radius: 8px 8px 0 0; padding: 15px; margin: 0 auto;"> -->
                    <table class="footer-parent-table" cellspacing="0" cellpadding="0" style="background-color: #0b0b0b; height: auto; width: 100%; max-width: 600px; padding: 15px;" width="600"> 
                        <tr>
                            <td class="footer-titles" style="color: #a4a4a4; font-weight: 600; font-size: 12px; padding: 5px 0; text-align: center;">OUR PARTNERS</td>
                        </tr>
                        <tr>
                            <td>
                                <table style="width: 100%; padding: 10px 0; text-align: center; margin: 0 auto;" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td class="footer-partners-text" valign="top" style="color: #808080; width: 50%; font-size: 12px; padding: 0 5px;">Official APAC Sponsor of <br>Formula 1®</td>
                                        <td class="footer-partners-text" valign="top" style="color: #808080; width: 50%; font-size: 12px; padding: 0 5px;">Official Regional Partner of FC <br>Bayern Munich</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table style="width: 100%; text-align: center;" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td style="width: 50%;">
                                            <a href="" name="f1-link" target="_blank" style="color: #ec0867; text-decoration: underline;">
                                            <img class="footer-icons" id="f1-logo" style="height: auto; max-height: 150px; width: 150px; margin: 10px 0; filter: none;" data-darkreader-inline-bgimage src="https://www.sbbanner.com/newsletter/newsletter-template-2024/f1-noise2.png" width="150"></a>
                                        </td>
                                        <td style="width: 50%;">
                                            <a href="" name="fc-link" target="_blank" style="color: #ec0867; text-decoration: underline;">
                                            <img class="footer-icons" id="fc-logo" style="height: auto; max-height: 90px; width: 90px; margin: 10px 0; filter: none;" data-darkreader-inline-bgimage src="https://www.sbbanner.com/newsletter/newsletter-template-2024/fc-noise2.png" width="90"></a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        
                    </table>
                    <table class="footer-parent-table2" cellspacing="0" cellpadding="0" style="background-color: #151515; height: auto; width: auto; max-width: 600px; border-radius: 0 0 8px 8px; padding: 15px; margin: 0 auto;" width="600">
                        <tr>
                            <td>
                                <table style="width: 100%; text-align: center; margin: 0 auto; border-bottom: 1px solid rgb(40, 40, 40);" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td class="footer-titles" style="color: #a4a4a4; font-weight: 600; font-size: 12px; padding: 5px 0; width: 50%;">SECURITY AND TRUST</td>
                                        <td class="footer-titles" style="color: #a4a4a4; font-weight: 600; font-size: 12px; padding: 5px 0; width: 50%;">RESPONSIBLE GAMING</td>
                                    </tr>
                                    <tr>
                                        <td style="width: 50%;">
                                            <a href="https://www.pagcor.ph/" target="_blank">
                                            <img class="footer-icons2" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/pagcor.png" style="height: auto; max-height: 40px; margin: 10px 0;" height="40"></a>
                                        </td>
                                        <td style="width: 50%;">
                                            <a href="" name="rg-link" target="_blank">
                                            <img class="footer-icons2" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/21.png" style="height: auto; max-height: 40px; margin: 10px 0;" height="40"></a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table style="width: 100%; padding-top: 10px; text-align: center;" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td class="footer-copyright-text" style="color: #808080; padding-bottom: 10px; font-size: 12px; text-align: center;">Copyright @2024 188BET. All Rights Reserved.</td>
                                    </tr>
                                    <tr>
                                        <td class="footer-copyright-text" style="color: #808080; padding-bottom: 10px; font-size: 12px; text-align: center;">To unsubscribe from newsletter, please see our 
                                            <a href="" name="privacy-policy-link" style="text-decoration: none;">
                                                <button class="link" style="background-color: transparent !important; border: none; outline: none; padding: 0; margin: 0; font-size: 12px; color: #FF8A00; font-weight: 400;">Privacy Policy</button>
                                                </a>or contact our Customer service Team.</td>
                                    </tr>
                                    <tr style="box-sizing: border-box;">
                                        <td class="footer-copyright-text" style="box-sizing: border-box; color: #808080; padding-bottom: 10px; font-size: 12px; text-align: center;">
                                            CONFIDENTIALITY NOTICE: This message (including any attachments) is confidential and may
                                            be privileged. If you have received it by mistake please notify the sender by return
                                            e-mail and delete this message from your system. Any unauthorized use or dissemination
                                            of this message in whole part is strictly prohibited.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 20px 0;">
                                            <a href="#" class="link" style="color: #808080; font-size: 12px; text-align: center;">Unsubscribe</a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </button>
                <!--Footer-->`

const logoLink = {
    ENCN: `<img id="dark-logo" style="box-sizing: border-box; width: 80px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188.png" width="80">`,
    ENMY: `<img id="dark-logo" style="box-sizing: border-box; width: 80px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188.png" width="80">`,
    ENVN: `<img id="dark-logo" style="box-sizing: border-box; width: 80px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188.png" width="80">`,
    ENTH: `<img id="dark-logo" style="box-sizing: border-box; width: 80px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188.png" width="80">`,
    ENKR: `<img id="dark-logo" style="box-sizing: border-box; width: 80px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188.png" width="80">`,
    ENID: `<img id="dark-logo" style="box-sizing: border-box; width: 80px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188.png" width="80">`,
    ENKH: `<img id="dark-logo" style="box-sizing: border-box; width: 80px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188.png" width="80">`,
    ENJP: `<img id="dark-logo" style="box-sizing: border-box; width: 80px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188.png" width="80">`,
    ENIN: `<img id="dark-logo" style="box-sizing: border-box; width: 80px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188.png" width="80">`,
    
    ZHCN: `<img id="dark-logo" style="box-sizing: border-box; width: 80px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188.png" width="80">`,
    ZHMY: `<img id="dark-logo" style="box-sizing: border-box; width: 80px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188.png" width="80">`,
    VIVN: `<img id="dark-logo" style="box-sizing: border-box; width: 80px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188.png" width="80">`,
    THTH: `<img id="dark-logo" style="box-sizing: border-box; width: 80px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188.png" width="80">`,
    KOKR: `<img id="dark-logo" style="box-sizing: border-box; width: 80px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188.png" width="80">`,
    IDID: `<img id="dark-logo" style="box-sizing: border-box; width: 80px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188.png" width="80">`,
    KMKH: `<img id="dark-logo" style="box-sizing: border-box; width: 80px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188.png" width="80">`,
    JAJP: `<img id="dark-logo" style="box-sizing: border-box; width: 80px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188.png" width="80">`,
    HIIN: `<img id="dark-logo" style="box-sizing: border-box; width: 80px;" src="https://www.sbbanner.com/newsletter/newsletter-template-2024/188.png" width="80">`,
}

const footerF1 = {
    ENCN: `<a href="" name="f1-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    ENMY: `<a href="" name="f1-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    ENVN: `<a href="" name="f1-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    ENTH: `<a href="" name="f1-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    ENKR: `<a href="" name="f1-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    ENID: `<a href="" name="f1-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    ENKH: `<a href="" name="f1-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    ENJP: `<a href="" name="f1-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    ENIN: `<a href="" name="f1-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    
    ZHCN: `<a href="" name="f1-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    ZHMY: `<a href="" name="f1-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    VIVN: `<a href="" name="f1-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    THTH: `<a href="" name="f1-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    KOKR: `<a href="" name="f1-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    IDID: `<a href="" name="f1-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    KMKH: `<a href="" name="f1-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    JAJP: `<a href="" name="f1-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    HIIN: `<a href="" name="f1-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
}
const footerFC = {
    ENCN: `<a href="" name="fc-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    ENMY: `<a href="" name="fc-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    ENVN: `<a href="" name="fc-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    ENTH: `<a href="" name="fc-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    ENKR: `<a href="" name="fc-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    ENID: `<a href="" name="fc-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    ENKH: `<a href="" name="fc-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    ENJP: `<a href="" name="fc-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    ENIN: `<a href="" name="fc-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    
    ZHCN: `<a href="" name="fc-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    ZHMY: `<a href="" name="fc-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    VIVN: `<a href="" name="fc-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    THTH: `<a href="" name="fc-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    KOKR: `<a href="" name="fc-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    IDID: `<a href="" name="fc-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    KMKH: `<a href="" name="fc-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    JAJP: `<a href="" name="fc-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
    HIIN: `<a href="" name="fc-link" target="_blank" style="color: #ec0867; text-decoration: underline;">`,
}
const footerRG = {
    ENCN: `<a href="" name="rg-link" target="_blank">`,
    ENMY: `<a href="" name="rg-link" target="_blank">`,
    ENVN: `<a href="" name="rg-link" target="_blank">`,
    ENTH: `<a href="" name="rg-link" target="_blank">`,
    ENKR: `<a href="" name="rg-link" target="_blank">`,
    ENID: `<a href="" name="rg-link" target="_blank">`,
    ENKH: `<a href="" name="rg-link" target="_blank">`,
    ENJP: `<a href="" name="rg-link" target="_blank">`,
    ENIN: `<a href="" name="rg-link" target="_blank">`,
    
    ZHCN: `<a href="" name="rg-link" target="_blank">`,
    ZHMY: `<a href="" name="rg-link" target="_blank">`,
    VIVN: `<a href="" name="rg-link" target="_blank">`,
    THTH: `<a href="" name="rg-link" target="_blank">`,
    KOKR: `<a href="" name="rg-link" target="_blank">`,
    IDID: `<a href="" name="rg-link" target="_blank">`,
    KMKH: `<a href="" name="rg-link" target="_blank">`,
    JAJP: `<a href="" name="rg-link" target="_blank">`,
    HIIN: `<a href="" name="rg-link" target="_blank">`,
}
const footerPP = {
    ENCN: `<a href="" name="privacy-policy-link" style="text-decoration: none;">`,
    ENMY: `<a href="" name="privacy-policy-link" style="text-decoration: none;">`,
    ENVN: `<a href="" name="privacy-policy-link" style="text-decoration: none;">`,
    ENTH: `<a href="" name="privacy-policy-link" style="text-decoration: none;">`,
    ENKR: `<a href="" name="privacy-policy-link" style="text-decoration: none;">`,
    ENID: `<a href="" name="privacy-policy-link" style="text-decoration: none;">`,
    ENKH: `<a href="" name="privacy-policy-link" style="text-decoration: none;">`,
    ENJP: `<a href="" name="privacy-policy-link" style="text-decoration: none;">`,
    ENIN: `<a href="" name="privacy-policy-link" style="text-decoration: none;">`,
    
    ZHCN: `<a href="" name="privacy-policy-link" style="text-decoration: none;">`,
    ZHMY: `<a href="" name="privacy-policy-link" style="text-decoration: none;">`,
    VIVN: `<a href="" name="privacy-policy-link" style="text-decoration: none;">`,
    THTH: `<a href="" name="privacy-policy-link" style="text-decoration: none;">`,
    KOKR: `<a href="" name="privacy-policy-link" style="text-decoration: none;">`,
    IDID: `<a href="" name="privacy-policy-link" style="text-decoration: none;">`,
    KMKH: `<a href="" name="privacy-policy-link" style="text-decoration: none;">`,
    JAJP: `<a href="" name="privacy-policy-link" style="text-decoration: none;">`,
    HIIN: `<a href="" name="privacy-policy-link" style="text-decoration: none;">`,
}

