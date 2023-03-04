
import {Container, Row, Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import googleLogo from '../../images/google_logo.png'
import csLogo from '../../images/CodeStack_Logo.png'
import toastLogo from '../../images/toastLogo.png'
import robloxLogo from '../../images/robloxLogo.png'
import openAiLogo from '../../images/openAiLogo.png'
import googlePic from '../../images/google-headquarter.jpg'
import sjcoePic from '../../images/sjcoe-building.jpg'
import toastPic from '../../images/toast-headquarters.jpg'
import robloxPic from '../../images/robolox-headquarters.jpg'
import openAiPic from '../../images/openAi-Office.jpg'


import DisplayComponent from '../displaycomponent/displaycomponent'

import React, { useState } from 'react';
let num = 0;



function BtnComponent(){
    const [currentComponent, setCurrentComponent] = useState(null);

    
  const handleClick = (props) => {
    setCurrentComponent(<DisplayComponent {...props} />);
  };

    return(
        <>
            <Container className='d-flex justify-content-center'>
            <Row>
                <Col>
                    <button onClick={() => handleClick({
                        name: 'Google',
                        skills: 'Because Google is one of the largest tech companies they have postions with varying level of knowledge required',
                        goals: 'To learn how one of the largest tech companies stays relevant in this fast paced industry',
                        srcLink: 'https://careers.google.com/jobs/results/',
                        jobImg: googlePic,
                        why: 'Google has always been one of my favorite companies and a leader in the tech world. I feel that the experienced gain from working for a company like this is pricelss'
                    })}>
                        <img className='logoButtons' src={googleLogo}/>
                    </button>
                </Col>
                <Col>
                    <button onClick={() => handleClick({
                        name: 'CodeStack',
                        skills: 'Everything you\'re teaching me now and then some',
                        goals: 'To continue my path as a software enginer and learn as much as I possibly can',
                        srcLink: 'https://sjcoe.org/jobs/',
                        jobImg: sjcoePic,
                        why: 'My time spent here at CodeStack has really left an impression on me. I really like the work enviornment, it seems very encouraging for new developers especially thos who graduated from the program. I\'m also constalnly impressed by the tech being developed here. '
                    })}>
                        <img className='logoButtons' src={csLogo}/>
                    </button>
                </Col>
                <Col>
                    <button onClick={() => handleClick({
                        name: 'Toast',
                        skills: 'Strong coding abilities, experience with web development, familiarity with cloud technologies and APIs',
                        goals: 'To understand and learn how point of sales systems are created and maintained',
                        srcLink: 'https://careers.toasttab.com/our-culture-recipe',
                        jobImg: toastPic,
                        why: 'One of the ideas I wanted to make a reality was to develop my own POS system. I think working here will be greate experince in learning how to make this dream a reality. I\'m intersted in learning as much as I can about where tech and food meet. '

                    })}>
                        <img className='logoButtons' src={toastLogo}/>
                    </button>
                </Col>
                <Col>
                    <button onClick={() => handleClick({
                        name: 'Roblox',
                        skills: 'Proficient in modern C++, multithreaded and asynchronous programming, profiling and performance optimization',
                        goals: 'To learn how to make games and teach coding. I would also like to know how the infastructure around people creating so much information is maintained',
                        srcLink: 'https://jobs.roblox.com/careers',
                        jobImg: robloxPic,
                        why: 'While I\'ve never really played roblox I\'ve always wanted to get into game development. I know roblox is not a game development platform but its implimentation of allowing its users to learn and write new code in a gameified way is remarkaable. I would love to be a part of this process and help make coding more fun and accesible to younger generations '
                    })}>
                        <img className='logoButtons' src={robloxLogo}/>
                    </button>
                </Col>
                <Col>
                    <button onClick={() => handleClick({
                        name: 'OpenAi',
                        skills: 'looking for people with solid engineering skills (for example designing, implementing, and improving a massive-scale distributed machine learning system), writing bug-free machine learning code, and building the science behind the algorithms employed.',
                        goals: 'I just want to learn as much as I can about AI. Hopefully it could be a begining in a new field filled with limitless potential',
                        srcLink: 'https://openai.com/careers',
                        jobImg: openAiPic,
                        why: 'The last few months have seen unprecdented advancments with AI that is altering that way that most industries will function going further. I would like to learn as much about AI as possible and potentially get in front of this new technogoly radically altering the profesional landscape'
                    })}>
                        <img className='logoButtons' src={openAiLogo}/>
                    </button>
                </Col>
            </Row>
            </Container>
            <div className='spacer'>
            </div>
            {currentComponent}
        </>
    )
}

export default BtnComponent