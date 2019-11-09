import React, { Component } from 'react';
import './Terms.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from "../footer/Footer";

class Terms extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="secondary-style">
				<div className="container padding-20 center">
          <div className="center-wrapper">
						<h2>Terms & Conditions</h2>
            <h2>Welcome to WebAnd.TV!</h2>
            <h3>Your Acceptance</h3>
            <p>
              By using or visiting the WebAnd.TV website or any WebAnd.TV products, software, data feeds, and services provided to you on, from, or through the WebAnd.TV website (collectively the "Service") you signify your agreement to (1) these terms and conditions (the "Terms of Service"), (2) WebAnd.TV's Privacy Policy, found at https://weband.tv/privacy and incorporated herein by reference. If you do not agree to any of these terms, the WebAnd.TV Privacy Policy, or the Community Guidelines, please do not use the Service.
            </p>
            <p>
              Although we may attempt to notify you when major changes are made to these Terms of Service, you should periodically review the most up-to-date version https://weband.tv/terms). WebAnd.TV may, in its sole discretion, modify or revise these Terms of Service and policies at any time, and you agree to be bound by such modifications or revisions. Nothing in these Terms of Service shall be deemed to confer any third-party rights or benefits.
            </p>
            <h3>Service</h3>
            <p>
              These Terms of Service apply to all users of the Service, including users who are also contributors of Content on the Service. “Content” includes the text, software, scripts, graphics, photos, sounds, music, videos, audiovisual combinations, interactive features and other materials you may view on, access through, or contribute to the Service. The Service includes all aspects of WebAnd.TV, including but not limited to all products, software and services offered via the WebAnd.TV website, such as the WebAnd.TV channels and other applications.
            </p>
            <p>
              The Service may contain links to third party websites that are not owned or controlled by WebAnd.TV. WebAnd.TV has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party websites. In addition, WebAnd.TV will not and cannot censor or edit the content of any third-party site. By using the Service, you expressly relieve WebAnd.TV from any and all liability arising from your use of any third-party website.
            </p>
            <p>
              Accordingly, we encourage you to be aware when you leave the Service and to read the terms and conditions and privacy policy of each other website that you visit
            </p>
            <h3>3. WebAnd.TV Accounts</h3>
            <p>
              In order to access some features of the Service, you will have to create a WebAnd.TV Account. You may never use another's account without permission. When creating your account, you must provide accurate and complete information. You are solely responsible for the activity that occurs on your account, and you must keep your account password secure. You must notify WebAnd.TV immediately of any breach of security or unauthorized use of your account.
            </p>
            <p>
              Although WebAnd.TV will not be liable for your losses caused by any unauthorized use of your account, you may be liable for the losses of WebAnd.TV or others due to such unauthorized use.
            </p>
            <h3>4. General Use of the Service—Permissions and Restrictions</h3>
            <p>
              WebAnd.TV hereby grants you permission to access and use the Service as set forth in these Terms of Service, provided that:
            </p>
            <p>
              You agree not to distribute in any medium any part of the Service or the Content without WebAnd.TV's prior written authorization, unless WebAnd.TV makes available the means for such distribution through functionality offered by the Service
            </p>
            <p>
              You agree not to alter or modify any part of the Service.
            </p>
            <p>
              You agree not to access Content through any technology or other explicitly authorized means WebAnd.TV may designate.
            </p>
            <p>
              You agree not to use the Service for any of the following commercial uses unless you obtain WebAnd.TV's prior written approval:
            </p>
            <p>
              the sale of access to the Service;
            </p>
            <p>
              the sale of advertising, sponsorships, or promotions placed on or within the Service or Content;
            </p>
            <p>
              the sale of advertising, sponsorships, or promotions on any page of an ad-enabled blog or website containing Content delivered via the Service, unless other material not obtained from WebAnd.TV appears on the same page and is of sufficient value to be the basis for such sales.
            </p>
            <p>
             Prohibited commercial uses do not include:
            </p>
            <p>
              uploading an original content to WebAnd.TV, or maintaining an original channel on WebAnd.TV, to promote your business or artistic enterprise;
            </p>
            <p>
              showing WebAnd.TV videos through the Player on an ad-enabled blog or website, subject to the advertising restrictions set forth above in Section 4.D; or
              any use that WebAnd.TV expressly authorizes in writing.
            </p>
            <p>
              You agree not to use or launch any automated system, including without limitation, "robots," "spiders," or "offline readers," that accesses the Service in a manner that sends more request messages to the WebAnd.TV servers in a given period of time than a human can reasonably produce in the same period by using a conventional on-line web browser. Notwithstanding the foregoing, WebAnd.TV grants the operators of public search engines permission to use spiders to copy materials from the site for the sole purpose of and solely to the extent necessary for creating publicly available searchable indices of the materials, but not caches or archives of such materials. WebAnd.TV reserves the right to revoke these exceptions either generally or in specific cases. You agree not to collect or harvest any personally identifiable information, including account names, from the Service, nor to use the communication systems provided by the Service (e.g., comments, email) for any commercial solicitation purposes. You agree not to solicit, for commercial purposes, any users of the Service with respect to their Content.
            </p>
            <p>
              In your use of the Service, you will comply with all applicable laws.
            </p>
            <p>
              WebAnd.TV reserves the right to discontinue any aspect of the Service at any time.
            </p>
            <h3>Your Use of Content</h3>
            <p>
              In addition to the general restrictions above, the following restrictions and conditions apply specifically to your use of Content.
            </p>
            <p>
              The Content on the Service, and the trademarks, service marks and logos ("Marks") on the Service, are owned by or licensed to WebAnd.TV, subject to copyright and other intellectual property rights under the law.
            </p>
            <p>
              Content is provided to you AS IS. You may access Content for your information and personal use solely as intended through the provided functionality of the Service and as permitted under these Terms of Service. You shall not download any Content unless you see a “download” or similar link displayed by WebAnd.TV on the Service for that Content. You shall not copy, reproduce, distribute, transmit, broadcast, display, sell, license, or otherwise exploit any Content for any other purposes without the prior written consent of WebAnd.TV or the respective licensors of the Content. WebAnd.TV and its licensors reserve all rights not expressly granted in and to the Service and the Content.
            </p>
            <p>
              You agree not to circumvent, disable or otherwise interfere with security-related features of the Service or features that prevent or restrict use or copying of any Content or enforce limitations on use of the Service or the Content therein.
            </p>
            <p>
              You understand that when using the Service, you will be exposed to Content from a variety of sources, and that WebAnd.TV is not responsible for the accuracy, usefulness, safety, or intellectual property rights of or relating to such Content. You further understand and acknowledge that you may be exposed to Content that is inaccurate, offensive, indecent, or objectionable, and you agree to waive, and hereby do waive, any legal or equitable rights or remedies you have or may have against WebAnd.TV with respect thereto, and, to the extent permitted by applicable law, agree to indemnify and hold harmless WebAnd.TV, its owners, operators, affiliates, licensors, and licensees to the fullest extent allowed by law regarding all matters related to your use of the Service.
            </p>
            <h3>Your Content and Conduct</h3>
            <p>
              As a WebAnd.TV account holder you may submit Content to the Service, including videos and user comments. You understand that WebAnd.TV does not guarantee any confidentiality with respect to any Content you submit.
            </p>
            <p>
              You shall be solely responsible for your own Content and the consequences of submitting and publishing your Content on the Service. You affirm, represent, and warrant that you own or have the necessary licenses, rights, consents, and permissions to publish Content you submit; and you license to WebAnd.TV all patent, trademark, trade secret, copyright or other proprietary rights in and to such Content for publication on the Service pursuant to these Terms of Service.
            </p>
            <p>
              For clarity, you retain all of your ownership rights in your Content. However, by submitting Content to WebAnd.TV, you hereby grant WebAnd.TV a worldwide, non-exclusive, royalty-free, sublicenseable and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the Content in connection with the Service and WebAnd.TV's (and its successors' and affiliates') business, including without limitation for promoting and redistributing part or all of the Service (and derivative works thereof) in any media formats and through any media channels. You also hereby grant each user of the Service a non-exclusive license to access your Content through the Service, and to use, reproduce, distribute, display and perform such Content as permitted through the functionality of the Service and under these Terms of Service. The above licenses granted by you in video Content you submit to the Service terminate within a commercially reasonable time after you remove or delete your videos from the Service. You understand and agree, however, that WebAnd.TV may retain, but not display, distribute, or perform, server copies of your videos that have been removed or deleted. The above licenses granted by you in user comments you submit are perpetual and irrevocable.
            </p>
            <p>
              You further agree that Content you submit to the Service will not contain third party copyrighted material, or material that is subject to other third party proprietary rights, unless you have permission from the rightful owner of the material or you are otherwise legally entitled to post the material and to grant WebAnd.TV all of the license rights granted herein.
            </p>
            <p>
              You further agree that you will not submit to the Service any Content or other material that is contrary to the WebAnd.TV Community Guidelines, which may be updated from time to time, or contrary to applicable local, national, and international laws and regulations.
            </p>
            <p>
              WebAnd.TV will process any audio or audiovisual content uploaded by you to the Service in accordance with the WebAnd.TV Data Processing Terms, except in cases where you uploaded such content for personal purposes or household activities.
            </p>
            <p>
              WebAnd.TV does not endorse any Content submitted to the Service by any user or other licensor, or any opinion, recommendation, or advice expressed therein, and WebAnd.TV expressly disclaims any and all liability in connection with Content. WebAnd.TV does not permit copyright infringing activities and infringement of intellectual property rights on the Service, and WebAnd.TV will remove all Content if properly notified that such Content infringes on another's intellectual property rights. WebAnd.TV reserves the right to remove Content without prior notice.
            </p>
            <h3>Account Termination Policy</h3>
            <p>
              WebAnd.TV will terminate a user's access to the Service if, under appropriate circumstances, the user is determined to be a repeat infringer.
            </p>
            <p>
              WebAnd.TV reserves the right to decide whether Content violates these Terms of Service for reasons other than copyright infringement, such as, but not limited to, pornography, obscenity, or excessive length. WebAnd.TV may at any time, without prior notice and in its sole discretion, remove such Content and/or terminate a user's account for submitting such material in violation of these Terms of Service.
            </p>
            <h3>Digital Millennium Copyright Act</h3>
            <p>
              If you are a copyright owner or an agent thereof and believe that any Content infringes upon your copyrights, you may submit a notification pursuant to the Digital Millennium Copyright Act ("DMCA") by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):
            </p>
            <p>
              A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;
            </p>
            <p>
              Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site;
            </p>
            <p>
              Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled and information reasonably sufficient to permit the service provider to locate the material;
            </p>
            <p>
              Information reasonably sufficient to permit the service provider to contact you, such as an address, telephone number, and, if available, an electronic mail;
            </p>
            <p>
              A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and
            </p>
            <p>
              A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
            </p>
            <p>
              Counter-Notice. If you believe that your Content that was removed (or to which access was disabled) is not infringing, or that you have the authorization from the copyright owner, the copyright owner's agent, or pursuant to the law, to post and use the material in your Content, you may send a counter-notice containing the following information to the Copyright Agent:
            </p>
            <p>
              Your physical or electronic signature;
            </p>
            <p>
              Identification of the Content that has been removed or to which access has been disabled and the location at which the Content appeared before it was removed or disabled;
            </p>
            <p>
              A statement that you have a good faith belief that the Content was removed or disabled as a result of mistake or a misidentification of the Content; and
            </p>
            <p>
              Your name, address, telephone number, and e-mail address, a statement that you consent to the jurisdiction of the federal court in Mar Del Plata, Argentina, and a statement that you will accept service of process from the person who provided notification of the alleged infringement.
            </p>
            <p>
              If a counter-notice is received by the Copyright Agent, WebAnd.TV may send a copy of the counter-notice to the original complaining party informing that person that it may replace the removed Content or cease disabling it in 10 business days. Unless the copyright owner files an action seeking a court order against the Content provider, member or user, the removed Content may be replaced, or access to it restored, in 10 to 14 business days or more after receipt of the counter-notice, at WebAnd.TV's sole discretion.
            </p>
            <h3>Warranty Disclaimer</h3>
            <p>
              YOU AGREE THAT YOUR USE OF THE SERVICES SHALL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WebAnd.TV, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF. WebAnd.TV MAKES NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THIS SITE'S CONTENT OR THE CONTENT OF ANY SITES LINKED TO THIS SITE AND ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF OUR SERVICES, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR SERVICES, (IV) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD PARTY, AND/OR (V) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WebAnd.TV DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES OR ANY HYPERLINKED SERVICES OR FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WebAnd.TV WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
            </p>
            <h3>Limitation of Liability</h3>
            <p>
              IN NO EVENT SHALL WebAnd.TV, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING FROM ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF OUR SERVICES, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR SERVICES, (IV) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD PARTY, AND/OR (V) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOUR USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT THE COMPANY IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE JURISDICTION.
            </p>
            <p>
              YOU SPECIFICALLY ACKNOWLEDGE THAT WebAnd.TV SHALL NOT BE LIABLE FOR CONTENT OR THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY AND THAT THE RISK OF HARM OR DAMAGE FROM THE FOREGOING RESTS ENTIRELY WITH YOU.
            </p>
            <p>
              The Service is controlled and offered by WebAnd.TV from its facilities in the United States of America. WebAnd.TV makes no representations that the Service is appropriate or available for use in other locations. Those who access or use the Service from other jurisdictions do so at their own volition and are responsible for compliance with local law.
            </p>
            <h3>Indemnity</h3>
            <p>
              To the extent permitted by applicable law, you agree to defend, indemnify and hold harmless WebAnd.TV, its parent corporation, officers, directors, employees and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the Service; (ii) your violation of any term of these Terms of Service; (iii) your violation of any third party right, including without limitation any copyright, property, or privacy right; or (iv) any claim that your Content caused damage to a third party. This defense and indemnification obligation will survive these Terms of Service and your use of the Service.
            </p>
            <h3>Ability to Accept Terms of Service</h3>
            <p>
              You affirm that you are either more than 18 years of age, or an emancipated minor, or possess legal parental or guardian consent, and are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Terms of Service, and to abide by and comply with these Terms of Service. In any case, you affirm that you are over the age of 13, as the Service is not intended for children under 13. If you are under 13 years of age, then please do not use the Service. There are lots of other great web sites for you. Talk to your parents about what sites are appropriate for you.
            </p>
            <h3>Assignment</h3>
            <p>
              These Terms of Service, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by WebAnd.TV without restriction.
            </p>
            <h3>General</h3>
            <p>
              You agree that: (i) the Service shall be deemed solely based in Mar del Plata; and (ii) the Service shall be deemed a passive website that does not give rise to personal jurisdiction over WebAnd.TV, either specific or general, in jurisdictions other than Mar del Plata. These Terms of Service shall be governed by the internal substantive laws of the State of Buenos Aires, without respect to its conflict of laws principles. Any claim or dispute between you and WebAnd.TV that arises in whole or in part from the Service shall be decided exclusively by a court of competent jurisdiction located in Mar del Plata, Buenos Aires. These Terms of Service, together with the Privacy Notice at https://weband.tv/privacy and any other legal notices published by WebAnd.TV on the Service, shall constitute the entire agreement between you and WebAnd.TV concerning the Service. If any provision of these Terms of Service is deemed invalid by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of these Terms of Service, which shall remain in full force and effect. No waiver of any term of this these Terms of Service shall be deemed a further or continuing waiver of such term or any other term, and WebAnd.TV's failure to assert any right or provision under these Terms of Service shall not constitute a waiver of such right or provision. WebAnd.TV reserves the right to amend these Terms of Service at any time and without notice, and it is your responsibility to review these Terms of Service for any changes. Your use of the Service following any amendment of these Terms of Service will signify your assent to and acceptance of its revised terms. YOU AND WebAnd.TV AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THE SERVICES MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED.
            </p>
					</div>
				</div>
				<Footer className="footer" />
			</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Terms));
