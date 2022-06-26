<script>
  import spacetime from 'spacetime';
  import { empty, notEmpty, roundNumber} from '$lib/common/utils';
  export let value;

  let nestedValue = value['data_value']['value'];

  function displayValue(value) {
    // NOTE: use '' for null/undefined because svelte will show 'null'/'undefined'
    return notEmpty(value) ? value : '';
  }

  function formatTime(value) {
    // NOTE: wikidata api provides time as '+00000002000-01-01T10:10:10Z'

    if (empty(value)) return '';

    // get rid of '+' and '0' at the start of the string
    let newTime = value.replace(/^\+0+/, '');

    // if time is just a year, return year
    if (newTime.includes('-00-00T00:00:00Z')) {
      return newTime.split('-00-00T00:00:00Z')[0];

      // if time is year-month-day, return day month year
    } else if (newTime.includes('T00:00:00Z')) {
      return spacetime(newTime).format('{date} {month} {year}');

      // if time is year-month-day hour-minute-second, do ???
    } else {
      throw 'need to implement formatTime() for this time value';
    }
  }

  function formatQuantity(value) {
    if (empty(value) || empty(value['amount'])) return;

    let amount = Number(value['amount']);

    let hasLowerBound = notEmpty(value['lowerBound']);
    let hasUpperBound = notEmpty(value['upperBound']);
    let decimalPlaces = 0;
    if (hasLowerBound && hasUpperBound) {
      if (value['upperBound'].includes('.')) {
        decimalPlaces = value['upperBound'].split('.')[1].length;
      }
    }
    // validate lowerBound and upperBound
    if ((hasLowerBound && !hasUpperBound) || (!hasLowerBound && hasUpperBound)) {
      throw 'need both lowerBound and upperBound';
    }
    if (hasLowerBound && hasUpperBound) {
      let lowerDiff = amount - Number(value['lowerBound']);
      let upperDiff = Number(value['upperBound']) - amount;
      if (roundNumber(lowerDiff, decimalPlaces) !== roundNumber(upperDiff, decimalPlaces)) {
        throw 'diff of lowerBound and upperBound have different values';
      }
    }

    let displayQuantity = String(amount);
    if (hasLowerBound && hasUpperBound) {
      let diff = Number(value['upperBound']) - amount;
      displayQuantity += `±${roundNumber(diff, decimalPlaces)}`;
    }
    if (notEmpty(value['unit'])) {
      displayQuantity += ` ${value['unit']}`;
    }

    return displayQuantity;
  }

</script>

{#if value['data_type'] == 'wikibase-item'}
  {displayValue(nestedValue['label'])}
{:else if value['data_type'] == 'wikibase-property'}
  {displayValue(nestedValue['label'])}
{:else if value['data_type'] == 'wikibase-lexeme'}
  {displayValue(nestedValue['label'])}
{:else if value['data_type'] == 'globe-coordinate'}
  {displayValue(nestedValue['latitude'])},
  {displayValue(nestedValue['longitude'])}
{:else if value['data_type'] == 'geo-shape'}
  {displayValue(nestedValue['label'])}<br />
  {displayValue(nestedValue['url'])}
{:else if value['data_type'] == 'commonsMedia'}
  {displayValue(nestedValue['label'])}<br />
  {displayValue(nestedValue['url'])}
{:else if value['data_type'] == 'quantity'}
  {formatQuantity(nestedValue)}
{:else if value['data_type'] == 'url'}
  {#if nestedValue}
    <a href={nestedValue}>{nestedValue}</a>
  {/if}
{:else if value['data_type'] == 'time'}
  {formatTime(nestedValue)}
{:else}
  {displayValue(nestedValue)}
{/if}