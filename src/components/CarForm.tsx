import Input from "./Input"
import Button from "./Button"
import { server_calls } from "../api/server"
import { chooseMake, chooseModel, chooseYear, chooseColor } from "../redux/slices/RootSlice"

import { useForm } from 'react-hook-form'
import { useDispatch, useStore } from "react-redux"
import { useNavigate } from "react-router-dom"

interface CarFormProps {
  id?: string[]
}

const CarForm = (props: CarFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();
  const navigate = useNavigate();
  
  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
  
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${data.year} ${data.make} ${data.model} ${props.id}`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
    
    } else {

      // use dispatch to get the state in the store
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseYear(data.year));
      dispatch(chooseColor(data.color));
    
    // Need commands that say go to the store (local db we're accessing), 
    // and get the state (local storage item/info) (which was sent 
      // by the dispatch in the lines right above), view it, 
      //and CREATE a new user with that state/info
      server_calls.create(store.getState());
      console.log(`Created: ${data.year} ${data.make} ${data.model} ${props.id}`)
      // reload the page after 2 seconds:
      setTimeout(() => {navigate("/dashboard")}, 2000);
      event.target.reset()

    } 
  }

  return (
    <div>
      <form onSubmit={(handleSubmit(onSubmit))}>
        <div>
          <label htmlFor="make">Car Make
          </label>
          <Input {...register('make')} name='make' placeholder="Make"/>
        </div>
        <div>
          <label htmlFor="model">Model
          </label>
          <Input {...register('model')} name='model' placeholder="Model"/>
        </div>
        <div>
          <label htmlFor="year">Year
          </label>
          <Input {...register('year')} name='year' placeholder="Year"/>
        </div>
        <div>
          <label htmlFor="color">Color
          </label>
          <Input {...register('color')} name='color' placeholder="Color"/>
        </div>
        <div className="flex p-1">
          <Button 
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
              Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CarForm