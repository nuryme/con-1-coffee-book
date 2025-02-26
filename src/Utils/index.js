import toast from "react-hot-toast";

// add a coffee to local storage
const addFavorite = (coffee) => {

    //get all previously saved coffee data
    const favorites = getAllFavorites()

    const isExist = favorites.find(item => item.id === coffee.id)
    if(isExist) {
        return toast.error('Already Exists!');
    }
    else {
        favorites.push(coffee)
        console.log(favorites);
        localStorage.setItem('favorites', JSON.stringify(favorites))
        toast.success('Successfully added')
    }
};

//remove coffee from local storage
const removeFavorite = (id) => {
  const favorites = getAllFavorites()
  const remaining = favorites.filter(coffee => coffee.id != id)
  localStorage.setItem('favorites', JSON.stringify(remaining))
  toast.success('Successfully removed!')


}


//get all coffees from local storage
const getAllFavorites = () => {
  const all = localStorage.getItem('favorites')

  if(all) {
    const favorites = JSON.parse(all)
    // console.log(favorites)
    return favorites
  }
  else {
    // console.log([])
    return []
  }
}


export { addFavorite, getAllFavorites, removeFavorite };
