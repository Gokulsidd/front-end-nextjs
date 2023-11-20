import React, { useEffect, useState } from 'react';

const SaveTemplate = ({ isOpen, onClose, onSave , subject , body }) => {
  const [templateName, setTemplateName] = useState('');
  const [templateSubject, setTemplateSubject] = useState('');
  const [templateDescription, setTemplateDescription] = useState('');

  useEffect(() => {
    if (isOpen) {
      setTemplateName('')
      setTemplateSubject(subject);
      setTemplateDescription(body);
    }
  }, [isOpen, subject, body]);

  const handleSave = () => {
    onSave({
      name: templateName,
      subject: templateSubject,
      description: templateDescription,
    });
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-6 rounded-md shadow-md'>
            <h2 className='text-xl w-[700px] font-semibold mb-4'>Save Template</h2>
            <div className='mb-4'>
              <label htmlFor='templateName' className='block mb-1'>
                Name:
              </label>
              <input
                type='text'
                id='templateName'
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
                className='w-full px-3 py-2 border rounded-md border-gray-300'
              />
              {console.log(templateSubject + 'oi')}
            </div>
            <div className='mb-4'>
              <label htmlFor='templateSubject' className='block mb-1'>
                Subject:
              </label>
              <input
                type='text'
                id='templateSubject'
                value={templateSubject}
                onChange={(e) => setTemplateSubject(e.target.value)}
                className='w-full px-3 py-2 border rounded-md border-gray-300'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='templateDescription' className='block mb-1'>
                Template:
              </label>
              <textarea
                id='templateDescription'
                value={templateDescription}
                onChange={(e) => setTemplateDescription(e.target.value)}
                className='w-full px-3 py-2 border rounded-md border-gray-300'
                rows='4'
              />
            </div>
            <div className='flex justify-end space-x-4'>
              <button
                className='bg-[#0052CC] hover:bg-[#0041A3] py-2 px-4 rounded-md shadow-md text-slate-100  mr-2'
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className='bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-md shadow-md'
                onClick={() => {
                  onClose()
                  setTemplateName('')
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SaveTemplate;
