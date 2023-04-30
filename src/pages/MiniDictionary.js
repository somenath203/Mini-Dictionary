import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import CircularProgress from '@mui/joy/CircularProgress';



const DictionaryPage = () => {

    const [textInput, setTextInput] = useState();

    const [open, setOpen] = useState();

    const [resultWord, setResultWord] = useState();
    const [partsOfSpeech, setPartsOfSpeech] = useState();
    const [definitionOfWord, setDefinitionOfWord] = useState();

    const [loading, setLoading] = useState();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    const onSubmitForm = async (e) => {

        e.preventDefault();

        setLoading(true);

        if (!textInput) {

            setLoading(false);

            setResultWord('');
            setPartsOfSpeech('');
            setDefinitionOfWord('');

        } else {

            try {

                const { data } = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${textInput}`);

                setLoading(false);

                setResultWord(data[0].word);
                setPartsOfSpeech(data[0].meanings[0].partOfSpeech);
                setDefinitionOfWord(data[0].meanings[0].definitions[0].definition);


            } catch (error) {

                setLoading(false);

                setResultWord('');
                setPartsOfSpeech('');
                setDefinitionOfWord('');

                console.log(error);

            };

        };

    };


    return (
        <div className='min-h-screen flex justify-center bg-gradient-to-b from-blue-50 to-blue-200'>

            <div className='w-5/6 lg:w-4/6 mt-52'>

                <form onSubmit={onSubmitForm}>

                    <TextField
                        label="enter your text"
                        variant="outlined"
                        onChange={(e) => setTextInput(e.target.value)}
                        className='w-full'
                    />

                    <div className='mt-4 w-2/4 block m-auto'>
                        <Button variant="contained" type='submit' className='w-full' onClick={() => setOpen(true)}>Submit</Button>
                    </div>

                </form>

                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        {loading ? <>
                            <Typography id="modal-modal-title" variant="h6" component="h2" flex justifyItems='center' alignItems='center'>
                                <CircularProgress variant="soft" /> <Box>Loading...</Box>
                            </Typography>
                        </> : <>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                {resultWord ? resultWord : 'Invalid Word or no word entered in the input field'}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Meaning: {definitionOfWord ? definitionOfWord : 'Cannot generate meaning of this word.'}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Parts Of Speech: {partsOfSpeech ? partsOfSpeech : 'Cannot detect parts of speech of this word.'}
                            </Typography>
                        </>}
                    </Box>
                </Modal>

            </div>

        </div>
    )
};

export default DictionaryPage;
