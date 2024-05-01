import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onChangeSearchInput,
    onFilterByRating,
    onFilterByCategory,
    onClearAllFilters,
    searchInput,
    activeCategoryId,
    activeRatingId,
    onChangeSearch,
  } = props

  const onChangeInput = event => {
    onChangeSearch(event.target.value)
  }

  const onEnterInput = event => {
    if (event.key === 'Enter') {
      onChangeSearchInput()
    }
  }

  const onClearFilterClicked = () => {
    onClearAllFilters()
  }

  return (
    <div className="filters-group-container">
      <div className="input-search-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeInput}
          onKeyDown={onEnterInput}
          value={searchInput}
        />
        <BsSearch />
      </div>
      <h1 className="filter-heading">Category</h1>
      <div className="category-container">
        {categoryOptions.map(eachCategory => {
          const onCategoryClicked = () =>
            onFilterByCategory(eachCategory.categoryId)
          const isActive = eachCategory.categoryId === activeCategoryId
          const categoryClassName = isActive ? 'button-el active' : 'button-el'
          return (
            <button
              type="button"
              className={categoryClassName}
              onClick={onCategoryClicked}
            >
              <p className="para-name">{eachCategory.name}</p>
            </button>
          )
        })}
      </div>
      <h1 className="filter-heading">Rating</h1>
      {ratingsList.map(eachRating => {
        const onRatingClicked = () => onFilterByRating(eachRating.ratingId)
        const isActive = eachRating.ratingId === activeRatingId
        const ratingClassName = isActive ? 'button-el active' : 'button-el'
        return (
          <div className="rating-star-container">
            <img
              src={eachRating.imageUrl}
              alt={`rating ${eachRating.ratingId}`}
              className="star-img"
            />
            <button
              type="button"
              className={ratingClassName}
              onClick={onRatingClicked}
            >
              <p className="para-name">& up</p>
            </button>
          </div>
        )
      })}
      <button
        className="clear-btn"
        type="button"
        onClick={onClearFilterClicked}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
