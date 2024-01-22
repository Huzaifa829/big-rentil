// FAQSection.js
import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = () => {
    const faqs = [
        { question: 'Is my place right for BigRentals?', answer: 'BigRentals offers listings for various rental options, including crane machines and forklifts. Whether you have a spare room or an entire property, you can find the perfect match for renting out heavy machinery.' },
        { question: 'Do I have to rent all the time?', answer: 'Not at all—you have full control over your rental calendar. Rent out your crane machines or forklifts once a year, a few days a month, or as often as you prefer.' },
        { question: 'How much should I interact with renters?', answer: 'React is a JavaScript library for building user interfaces.' },
        { question: 'What is React?', answer: 'It’s entirely up to you. Some lessors prefer to communicate with renters only at key moments—such as providing instructions during pickup and return—while othersenjoy meeting renters in person. Find a communication style that suits both you and your renters.' },
        // Add more FAQs as needed
    ];

    return (
        <div className='HA_faq_main'>
            <div className='HA_faq_main_child'>
                <div className='HA_faq_main_child_1'>
                    <p className='HA_faq_main_child_1_text'>Your questions,
                        answered</p>
                </div>
                <div className='HA_faq_main_child_2'>
                    {faqs.map((faq, index) => (
                        <Accordion key={index} style={{ background:"transparent",borderBottom: '1px solid #ddd' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon style={{color:'#FFF'}} />}>
                                <Typography color={'#FFF'} variant="h6">{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color={'#717171'}>{faq.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
