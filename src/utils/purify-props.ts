export const purifyProps = <T extends object>(props: T, excluded: string[]) =>
    Object.fromEntries(Object.entries(props).filter(([key]) => excluded.indexOf(key) === -1)) as T
