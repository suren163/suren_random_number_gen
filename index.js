const random_number_gen =  (min=0, max=1000)=>{
    return Math.round(Math.random()* (max-min) + min);
}

export default random_number_gen;