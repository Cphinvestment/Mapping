{
  type: "FeatureCollection",
  metadata: {
    generated: 1545093023000,
    url: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson,
    title: USGS All Earthquakes, Past Day,
    api: 1.7.0,
    count: 296,
    status: 200
  },
  bbox: [
    minimum longitude,
    minimum latitude,
    minimum depth,
    maximum longitude,
    maximum latitude,
    maximum depth
  ],
  features: [
    {
      type: "Feature",
      properties: {
        mag: Decimal,
        place: String,
        time: Long Integer,
        updated: Long Integer,
        tz: Integer,
        url: String,
        detail: String,
        felt:Integer,
        cdi: Decimal,
        mmi: Decimal,
        alert: String,
        status: String,
        tsunami: Integer,
        sig:Integer,
        net: String,
        code: String,
        ids: String,
        sources: String,
        types: String,
        nst: Integer,
        dmin: Decimal,
        rms: Decimal,
        gap: Decimal,
        magType: String,
        type: String
      },
      geometry: {
        type: "Point",
        coordinates: [
          longitude,
          latitude,
          depth
        ]
      },
      id: String
    },
    …
  ]
}