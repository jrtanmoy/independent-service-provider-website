import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5 pt-4'>
            <div>
                <h4>1. Difference between authorization and authentication?</h4>
                <p className='fs-5 fst-italic'>Ans :</p>
                <p className='fs-5 fst-italic'>a) Authentication verifies who the user is but Authorization determines what resources a user can access.</p>
                <p className='fs-5 fst-italic'>b) Authentication works through passwords and other information provided by the user but Authorization works through settings that are implemented and maintained by the organization.</p>
                <p className='fs-5 fst-italic'>c) Authentication is the first step of a good identityon the other hand Authorization always takes place after authentication.</p>
            </div>

            <div>
                <h4>2. Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p className='fs-5 fst-italic'>Ans : Firebase Authentication provides us backend services, SDKs, and ready-made UI libraries to authenticate users to our app. It supports authentication using passwords, phone numbers, Google, Facebook and Twitter, and many more. It's also make error handling easy. Than's why we are using Firebase Authentication.</p>
                <p className='fs-5 fst-italic'>There are many alternatives to implement authentication. Top 10 are :
                    <ol class="list-group list-group-numbered w-25 mt-4">
                        <li class="list-group-item">Okta</li>
                        <li class="list-group-item">Auth0</li>
                        <li class="list-group-item">OneLogin.</li>
                        <li class="list-group-item">JumpCloud.</li>
                        <li class="list-group-item">Microsoft Azure Active Directory.</li>
                        <li class="list-group-item">CyberArk Identity (formerly Idaptive)</li>
                        <li class="list-group-item">Rippling.</li>
                        <li class="list-group-item">SecureAuth Identity Platform.</li>
                        <li class="list-group-item">ForgeRock.</li>
                        <li class="list-group-item">WSO2 Identity Server</li>
                    </ol>
                </p>
            </div>
            
            <div>
                <h4>3. What other services does firebase provide other than authentication?</h4>
                <p className='fs-5 fst-italic'>Ans : </p>
                <p className='fs-5 fst-italic'>Firebase not only provides authentication but also provides many more services. Like,
                    <ol class="list-group list-group-numbered w-25 mt-4">
                        <li class="list-group-item">Realtime Database.</li>
                        <li class="list-group-item">Cloud messaging.</li>
                        <li class="list-group-item">Storage.</li>
                        <li class="list-group-item">Hosting.</li>
                        <li class="list-group-item">Remote Config.</li>
                        <li class="list-group-item">Test Lab</li>
                        <li class="list-group-item">Crash Reporting</li>
                    </ol>
                </p>
            </div>
        </div>
    );
};

export default Blogs;