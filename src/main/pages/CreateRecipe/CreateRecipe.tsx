


import React from 'react';
import {StyledBox, StyledTypography, Button} from './styled'
import {Header} from '../../components';
import {schema} from './resolver';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {Stack, CircularProgress} from '@mui/material';
import useCountries from '../../hooks/useCountries'
import usePostRecipe from '../../hooks/usePostRecipe'
import {TextInput , Select, SearchCountries, Modal} from '../../components';



function CreateRecipe () {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const { postRecipe, loading, error, successes } = usePostRecipe();
  const countries = useCountries();
  const difficulties = [{label:'Easy', value:1} , {label:'Medium', value:2}, {label:'Hard', value:3}]
  const onSubmit = async (data: any) => {
      try {
        const response = await postRecipe(data);
        if(response) {

        }
      } catch (err) {
        console.error('Error posting recipe:', err);
      }
    };
    return (
        <>
          <Header></Header>
          <StyledBox component="form" onSubmit={handleSubmit(onSubmit)}>
            { loading &&
              <CircularProgress />
            }
            <Modal open={successes} title='Recipe Created' description='Your Recipe has been created successfully' />
            <Modal open={Boolean(error)} title='Recipe Created' description='Your Recipe has been created successfully' />

            <Stack spacing={3}>
                {/* Name / Origin */}
                <Stack flexDirection='row' alignItems='center' justifyContent='space-between'>
                    <TextInput
                     name="name"
                     label="Name"
                     control={control}
                     error={Boolean(errors.name)}
                     helperText={errors.name?.message}/>
                     <SearchCountries name='origin' label={'Origin'} control={control} error={Boolean(errors.origin)} helperText={errors.origin?.message} options={countries} ></SearchCountries>
                </Stack>
                <Stack  >
                    <TextInput
                     height={80}
                     name="description"
                     label="Description"
                     control={control}
                     error={Boolean(errors.description)}
                     helperText={errors.description?.message}/>
                     <StyledTypography>0/200 Characters</StyledTypography>
                </Stack>
                 {/* Difficulty / Protien */}
                 <Stack flexDirection='row' alignItems='center' justifyContent='space-between'>
                    <Select
                      options={difficulties}
                     name="difficulty"
                     label="Difficulty"
                     control={control}
                     error={Boolean(errors.difficulty)}
                     helperText={errors.difficulty?.message}/>

                     <TextInput
                     name="protien"
                     label="Protien"
                     control={control}
                     error={Boolean(errors.protien)}
                     helperText={errors.protien?.message}/>
                </Stack>
                {/* Produce / Spice */}
                 <Stack flexDirection='row' alignItems='center' justifyContent='space-between'>
                    <TextInput
                     name="produce"
                     label="Produce"
                     control={control}
                     error={Boolean(errors.produce)}
                     helperText={errors.produce?.message}/>

                     <TextInput
                     name="spice"
                     label="Spice"
                     control={control}
                     error={Boolean(errors.spice)}
                     helperText={errors.spice?.message}/>
                </Stack>
                {/* Cooking Oil / Vloume */}

                <Stack flexDirection='row' alignItems='center' justifyContent='space-between'>
                    <TextInput
                     name="oil"
                     label="Cooking Oil?"
                     control={control}
                     error={Boolean(errors.oil)}
                     helperText={errors.oil?.message}/>

                     <TextInput
                     name="vloume"
                     type='number'
                     label="Vloume"
                     subLabel='grams'
                     control={control}
                     error={Boolean(errors.vloume)}
                     helperText={errors.vloume?.message}/>
                </Stack>
                {/* Serves / Auth */}
                <Stack flexDirection='row' alignItems='center' justifyContent='space-between'>
                    <TextInput
                     name="serves"
                     label="Serves"
                     type='number'
                     control={control}
                     error={Boolean(errors.serves)}
                     subLabel='people'
                     helperText={errors.serves?.message}/>
                    <SearchCountries name='authenticity' label={'authenticity'} control={control} error={Boolean(errors.authenticity)} helperText={errors.authenticity?.message} options={countries} ></SearchCountries>
                </Stack>
                {/* Stock */}
                <Stack flexDirection='row' alignItems='center' justifyContent='space-between'>
                    <TextInput
                     name="stock"
                     label="Stock"
                     control={control}
                     error={Boolean(errors.stock)}
                     helperText={errors.stock?.message}/>
                </Stack>
            </Stack>
            <Button type='submit' sx={{marginTop:'20px', backgroundColor:'#764AF4'}} fullWidth variant='contained'>Add Recipe</Button>
          </StyledBox>
        </>
    )
}

export default CreateRecipe;
