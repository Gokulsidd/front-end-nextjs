'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import SaveTemplate from '@/components/saveTemplate';
import Sidebar from '@/app/home/sidebar/sidebard';
import Layout from '../layout';

const ComposeEmail = () => {
  const [clientEmail, setClientEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [templates , setTemplates] = useState(null)
  const [selectedTemplate , setSelectedTemplate] = useState(null)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/api/template')
     .then((res) => {
      setTemplates(res.data)
     })
  } , [showModal])



  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template)

    if (template) {
      setSubject(template.subject || ''); 
      setBody(template.description || '');
    }
  }
  
  const handleSaveTemplate = () => {
    setShowModal(true);
  }
  
  const handleSaveTemplateData = ({name , subject , description}) => {
    axios.post('http://localhost:3001/api/template' , {
      name:name ,
      subject:subject,
      description:description

    })
    .then(() => console.log(name,subject,description))
    setShowModal(false);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      to:clientEmail ,
      subject:subject,
      text:body
    }

    try{
      const response = await fetch('http://localhost:3001/api/email', {
        method:'POST',
        headers: {
          'content-type' : 'application/json',
        },
        body:JSON.stringify(formData)
      });

      if(response.ok){
        console.log('email sent successfully')
      }else{
        console.log('error fetching data')
      }
    }catch (error){
      console.log(error)
    }


  };

  return (
      <div className='w-full h-screen m-auto bg-[#ffffff] rounded-sm shadow-md space-y-6'>
      <div className='h-14 font-semibold flex items-center pl-14 border-b border-slate-300'>Compose Email</div>
      <form onSubmit={handleSubmit} className='space-y-10 relative px-16 py-6 '>
      <div>
          <input
            type="email"
            id="subject"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            required
            placeholder='To'
            className='w-full py-4 px-2  rounded-md  outline-blue-200 border border-gray-200'
          />
        </div>
        <div>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            placeholder='Subject'
            className='w-full py-4 px-2 rounded-md  outline-blue-200 border border-gray-200'
          />
        </div>
        <div>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            placeholder='Description'
            className='w-full h-52 py-4 px-2 rounded-md  outline-blue-200 border border-gray-200'
          />
        </div>
        <div>
          <label htmlFor="template" className='text-lg text-slate-700 mr-4'>Select Template:</label>
          <select
            id="template"
            className='pr-6 py-4 w-[400px]  rounded-sm outline-none'
            onChange={(e) => handleSelectTemplate(templates?.find(template => template.name === e.target.value))} 
            value={selectedTemplate ? selectedTemplate.name : {}}
          >
            {templates?.map((template) => {
              return <option className='px-4 py-4' key={template.name} value={template.name} >{template.name}</option>
            })}
          </select>
        </div>
        <div>
        <button className='bg-[#0052CC] hover:bg-[#0041A3] p-3 rounded-md shadow-md text-slate-100 font-semibold text-sm right-60 bottom-14 absolute' type='button' onClick={handleSaveTemplate}>Save Template</button>   
        <SaveTemplate isOpen={showModal} onClose={() => setShowModal(false)} onSave={handleSaveTemplateData} subject={subject} body={body} />     
        <button className='bg-[#0052CC] hover:bg-[#0041A3] p-3 rounded-md shadow-md text-slate-100 font-semibold text-sm right-24 bottom-14 absolute' type="submit">Send Email</button>
        </div>
      </form>
    </div>
  );
};

export default ComposeEmail;
