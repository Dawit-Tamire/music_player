import { useCallback } from 'react';

import { songActions, selectSong } from '../slices/songSclice';

import { useAppDispatch, useAppSelector } from '../root/hooks';
import { type  Song } from '../types/types';

interface PhotoServiceOperators {
    photos: Song | Song[];
    fetchAllPhotos: () => void;
}

const usePhotoService = (): Readonly<PhotoServiceOperators> => {
    const dispatch = useAppDispatch();

    return {
        photos: useAppSelector(selectSong),

        fetchAllPhotos: useCallback(() => {
            dispatch(songActions.fetchAllisLoading());
            dispatch(songActions.fetchAll());
        }, [dispatch]),
    };
};

export default usePhotoService;