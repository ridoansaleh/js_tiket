## Custom-Select Logic

1. get input's value

2. if value is empty
  - display popular label
  - populate list of popular city
  - stop

2. hide popular label

3. find similar city or airport based on value

4. reset option list to empty

5. if result didn't found
  - display text placeholder to inform user
  - stop

5. if result were found 
  - map the data to option item element
  - map based on total airport 
  - add click event on every city / airport


## Functionality Improvements

- show border in product box on hover

- modify airport and city list, so user can search airport instead of city  
  Example: "Medan" => "Medan (MESC)" in the input  
  It should be "Kuala Namu (KNO)"

- change font color of disabled date

- put overlay on focus in the big box

- add accessibilty for product box from keyboard

## Engineering Best Practices

- Define font-family in common.css

- Improve CSS writing by using BEM pattern or else
  - common.css
  - sub-heading.css
  - ticket-type.css
  - ticket-detail.css
  - ticket-footer.css
  - search-result.css
