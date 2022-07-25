import {NextPage} from "next";
import {useRouter} from "next/router";
import {ArrowLeftIcon} from "@heroicons/react/solid";
import Link from "next/link";

const Room: NextPage = () => {
    const router = useRouter();
    const {id} = router.query;
    return (
        <>
            <Link href={`/movie/${id}`} passHref>
                <a title="back" className="flex items-center">
                    <ArrowLeftIcon className="w-8 h-8 dark:text-white cursor-pointer mb-6"/>
                </a>
            </Link>
            <iframe allowFullScreen src={`/se_player.php?video_id=${id}&tmdb=1`} className="w-full h-screen"/>
        </>
    );
};

export default Room;
