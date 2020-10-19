export type HighResolutionTime = [number, number]

export function hrtime(time?: HighResolutionTime): HighResolutionTime {
  return process.hrtime(time)
}

export function hrtimeToNanos(hrtime: HighResolutionTime): number {
  return hrtime[0] * 1e9 + hrtime[1]
}

export function hrtimeToMillis(hrtime: HighResolutionTime): number {
  return hrtime[0] * 1e3 + hrtime[1] / 1e6
}

export function hrtimeToSeconds(hrtime: HighResolutionTime): number {
  return hrtime[0] + hrtime[1] / 1e9
}

export function nanosToSeconds(nanos: number): number {
  return nanos / 1e9
}

export function microsToSeconds(micros: number): number {
  return micros / 1e6
}

export function millisToSeconds(millis: number): number {
  return millis / 1e3
}

export function stopWatch(convert = hrtimeToSeconds): () => number {
  const start = hrtime()

  return () => convert(hrtime(start))
}
