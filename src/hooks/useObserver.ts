import { RefObject, useEffect, useRef } from "react"

export const useObserver = (
    ref: RefObject<HTMLElement>,
    canLoad: boolean,
    isFetching: boolean,
    isLoading: boolean,
    callback: () => void
) => {
    const observer = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        if (isLoading || isFetching) return
        if (observer.current) observer.current?.disconnect()
        const cb = (entries: IntersectionObserverEntry[]) => {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        }

        observer.current = new IntersectionObserver(cb)
        if (ref.current) {
            observer.current.observe(ref.current)
        }
    }, [callback, canLoad, isFetching, isLoading, ref])
}
