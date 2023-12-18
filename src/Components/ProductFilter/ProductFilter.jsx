import React, { useState } from 'react'
import './ProductFilter.css'

const FilterComponent = ({ setData, setAdvanceFilter }) => {
  const [checkedOptions, setCheckedOptions] = useState([])
  const [searchText, setSearchText] = useState('')
  const [staircase, setStaircase] = useState('internal')
  const [parking, setParking] = useState('yes')
  const [garden, setGarden] = useState('yes')

  const [basement, setBasement] = useState('yes')
  const [roomDetails, setRoomDetails] = useState({
    num_master_bedrooms: 0,
    num_additional_bedrooms: 0,
    num_common_toilets: 0,
    num_separate_toilet_bathroom: 0,
    kitchen: 0,
    num_wash_areas: 0,
    store: 0,
    living_room: 0,
    dining: 0,
    guest_room: 0,
    num_pooja_rooms: 0,
    num_utility_rooms: 0,
    num_shops: 0,
  })

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target
    let selectedFilters = checked
      ? [...checkedOptions, value.toLowerCase()]
      : [...checkedOptions]

    if (!checked) {
      selectedFilters = selectedFilters.filter((item, key) => {
        return item !== value.toLowerCase()
      })
    }

    setCheckedOptions(selectedFilters)
  }

  const filterProperties = () => {
    console.log(roomDetails)

    setAdvanceFilter(roomDetails)
    setData(
      searchText
        ? [...checkedOptions, searchText.toLowerCase()]
        : checkedOptions,
    )
    // console.log("Selected Total Entry:", checkedOptions);
    // console.log("Room Details:", roomDetails);
  }

  const handleSearchText = (event) => {
    setSearchText(event.target.value)
  }

  const handleRoomDetailsChange = (event) => {
    const { name, value } = event.target
    setRoomDetails((prevBedrooms) => ({
      ...prevBedrooms,
      [name]: parseInt(value, 10),
    }))
  }

  return (
    <div className="filter-container p-3 bg-slate-100 mb-10">
      <h1>Property Filter</h1>
      <div className="grid grid-cols-1  ">
        <div className=" w-75 border-2  mb-4 rounded-lg">
          <h3>Plot Area:</h3>
          <div className="filter-label">
            <label>{'< 500 sq.ft'}</label>
            <span>
              <input
                type="checkbox"
                name="selectedPlotArea"
                value="<500 sq.ft"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>

          <div className="filter-label">
            <label className="flex justify-between">500-749 sq.ft</label>
            <span>
              <input
                type="checkbox"
                name="selectedPlotArea"
                value="500-749 sq.ft"
                onChange={handleCheckboxChange}
              />{' '}
            </span>
          </div>

          <div className="filter-label">
            <label className="flex justify-between">750-999 sq.ft</label>
            <span>
              {' '}
              <input
                type="checkbox"
                name="selectedPlotArea"
                value="750-999 sq.ft"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>
          <div className="filter-label">
            <label className="flex justify-between">1000-1249 sq.ft</label>
            <span>
              <input
                type="checkbox"
                name="selectedPlotArea"
                value="1000-1249 sq.ft"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>

          <div className="filter-label">
            <label className="flex justify-between">1250-1499 sq.ft</label>
            <span>
              <input
                type="checkbox"
                name="selectedPlotArea"
                value="1250-1499 sq.ft"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>

          <div className="filter-label">
            <label className="flex justify-between">1500-1999 sq.ft</label>
            <span>
              <input
                type="checkbox"
                name="selectedPlotArea"
                value="1500-1999 sq.ft"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>

          <div className="filter-label">
            <label className="flex justify-between">2000-2499 sq.ft</label>
            <span>
              {' '}
              <input
                type="checkbox"
                name="selectedPlotArea"
                value="2000-2499 sq.ft"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>
          <div className="filter-label">
            <label className="flex justify-between">2500-2999 sq.ft</label>
            <span>
              <input
                type="checkbox"
                name="selectedPlotArea"
                value="2500-2999 sq.ft"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>

          <div className="filter-label">
            <label className="flex justify-between">3000-3999 sq.ft</label>
            <span>
              <input
                type="checkbox"
                name="selectedPlotArea"
                value="3000-3999 sq.ft"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>
          <div className="filter-label">
            <label className="flex justify-between">4000-4999 sq.ft</label>
            <span>
              <input
                type="checkbox"
                name="selectedPlotArea"
                value="4000-4999 sq.ft"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>

          <div className="filter-label">
            <label className="flex justify-between">5000-5999 sq.ft</label>
            <span>
              <input
                type="checkbox"
                name="selectedPlotArea"
                value="5000-5999 sq.ft"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>

          <div className="filter-label">
            <label className="flex justify-between">&gt; 6000 sq.ft</label>
            <span>
              <input
                type="checkbox"
                name="selectedPlotArea"
                value=">6000 sq.ft"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>
        </div>
        <div className=" w-75 border-2  mb-4 rounded-lg">
          <h3>Number of Floors:</h3>
          <div className="filter-label">
            <label className="flex justify-between">G</label>
            <span>
              <input
                type="checkbox"
                name="selectedFloors"
                value="G"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>

          <div className="filter-label">
            <label className="flex justify-between">G+1</label>
            <span>
              {' '}
              <input
                type="checkbox"
                name="selectedFloors"
                value="G+1"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>

          <div className="filter-label">
            <label className="flex justify-between">G+2</label>
            <span>
              {' '}
              <input
                type="checkbox"
                name="selectedFloors"
                value="G+2"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>

          <div className="filter-label">
            <label className="flex justify-between">G+3</label>
            <span>
              {' '}
              <input
                type="checkbox"
                name="selectedFloors"
                value="G+3"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>
          <div className="filter-label">
            <label className="flex justify-between">G+4</label>
            <span>
              <input
                type="checkbox"
                name="selectedFloors"
                value="G+4"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>
          <div className="filter-label">
            <label className="flex justify-between">Basement</label>
            <span>
              <input
                type="checkbox"
                name="selectedFloors"
                value="Basement"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>
        </div>
        <div className=" w-75 border-2  mb-4 rounded-lg">
          <h3>Entry Direction:</h3>
          <div className="filter-label">
            <label className="flex justify-between">North</label>
            <span>
              {' '}
              <input
                type="checkbox"
                name="selectedEntryDirection"
                value="North"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>
          <div className="filter-label">
            <label className="flex justify-between">South</label>
            <span>
              <input
                type="checkbox"
                name="selectedEntryDirection"
                value="South"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>

          <div className="filter-label">
            <label className="flex justify-between">East</label>
            <span>
              <input
                type="checkbox"
                name="selectedEntryDirection"
                value="East"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>

          <div className="filter-label">
            <label className="flex justify-between">West</label>
            <span>
              <input
                type="checkbox"
                name="selectedEntryDirection"
                value="West"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>
          <div className="filter-label">
            <label className="flex justify-between"> South East</label>
            <span>
              <input
                type="checkbox"
                name="selectedEntryDirection"
                value="South East"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>
          <div className="filter-label">
            <label className="flex justify-between">North East</label>
            <span>
              <input
                type="checkbox"
                name="selectedEntryDirection"
                value="North East"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>
          <div className="filter-label">
            <label className="flex justify-between"> North West</label>
            <span>
              <input
                type="checkbox"
                name="selectedEntryDirection"
                value="North West"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>

          <div className="filter-label">
            <label className="flex justify-between"> South West</label>
            <span>
              <input
                type="checkbox"
                name="selectedEntryDirection"
                value="South West"
                onChange={handleCheckboxChange}
                className="w-min"
              />{' '}
            </span>
          </div>
        </div>
        <div className="advance-detail w-75 border-2  mb-4 rounded-lg">
          <h3>Advance Details:</h3>
          <label className="flex justify-between">Master Bedrooms</label>
          <input
            type="number"
            name="num_master_bedrooms"
            onChange={handleRoomDetailsChange}
            className="w-min h-6"
          />{' '}
          <label className="flex justify-between">Additional Bedrooms</label>
          <input
            type="number"
            name="num_additional_bedrooms"
            onChange={handleRoomDetailsChange}
            className="w-min h-6"
          />{' '}
          <label className="flex justify-between">Common Toilets</label>
          <input
            type="number"
            name="num_common_toilets"
            onChange={handleRoomDetailsChange}
            className="w-min h-6"
          />{' '}
          <label className="flex justify-between">
            Separate Toilet & Bathroom
          </label>
          <input
            type="number"
            name="num_separate_toilet_bathroom"
            onChange={handleRoomDetailsChange}
            className="w-min h-6"
          />{' '}
          <label className="flex justify-between">Kitchen</label>
          <input
            type="number"
            name="kitchen"
            onChange={handleRoomDetailsChange}
            className="w-min h-6"
          />{' '}
          <label className="flex justify-between">Wash Area</label>
          <input
            type="number"
            name="num_wash_areas"
            onChange={handleRoomDetailsChange}
            className="w-min h-6"
          />{' '}
          <label className="flex justify-between">Store</label>
          <input
            type="number"
            name="store"
            onChange={handleRoomDetailsChange}
            className="w-min h-6"
          />{' '}
          <label className="flex justify-between">Living Room</label>
          <input
            type="number"
            name="living_room"
            onChange={handleRoomDetailsChange}
            className="w-min h-6"
          />{' '}
          <label className="flex justify-between">Dining</label>
          <input
            type="number"
            name="dining"
            onChange={handleRoomDetailsChange}
            className="w-min h-6"
          />{' '}
          <label className="flex justify-between">Guest Room</label>
          <input
            type="number"
            name="guest_room"
            onChange={handleRoomDetailsChange}
            className="w-min h-6"
          />{' '}
          <label className="flex justify-between">Pooja Room</label>
          <input
            type="number"
            name="num_pooja_rooms"
            onChange={handleRoomDetailsChange}
            className="w-min h-6"
          />{' '}
          <label className="flex justify-between">Utility Room</label>
          <input
            type="number"
            name="num_utility_rooms"
            onChange={handleRoomDetailsChange}
            className="w-min h-6"
          />{' '}
          <label className="flex justify-between">Staircase</label>
          <select
            value={staircase}
            onChange={(e) => setStaircase(e.target.value)}
          >
            <option value="internal">internal</option>
            <option value="external">external</option>
          </select>
          <label className="flex justify-between">Parking</label>
          <select value={parking} onChange={(e) => setParking(e.target.value)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <label className="flex justify-between">Garden</label>
          <select value={garden} onChange={(e) => setGarden(e.target.value)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <label className="flex justify-between">Basement</label>
          <select
            value={basement}
            onChange={(e) => setBasement(e.target.value)}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <label className="flex justify-between">Shops</label>
          <input
            type="number"
            name="num_shops"
            onChange={handleRoomDetailsChange}
            className="w-min h-8"
          />
        </div>
      </div>

      <div className="advance-serch">
        <h1>Advance Search</h1>

        <input
          type="text"
          placeholder="ex. South West"
          onChange={handleSearchText}
        />

        <button
          onClick={filterProperties}
          className=" btn filter-btn flex m-auto mt-5 w-40 justify-center 
          rounded-md px-3 py-1.5 text-lg 
          "
        >
          Apply Filters
        </button>
      </div>
    </div>
  )
}

export default FilterComponent
