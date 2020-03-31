import { getTargetUrl } from '../Helpers'

const streetlightPopup = (feature, layer) => {
  const varName = getTargetUrl()

  const content = `<div class="item"><i class="tag fa fa-map-marker"></i><p class="title">Location </p><p class="info">${feature.properties.location_description}</p></div><hr/>
  <div class="item"><i class="tag fa fa-tag"></i><p class="title">Number on street light </p><p class="info">${feature.properties.central_asset_id}</p></div>
  <a class="button-primary" href="${varName}/street-lighting/report-an-issue/fault-type?assetId=${feature.properties.central_asset_id}&siteCode=${feature.properties.site_code}">Report this street light</a>`

  layer.bindPopup(content)
}

export {
  streetlightPopup
}