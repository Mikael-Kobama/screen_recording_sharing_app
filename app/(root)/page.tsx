"use client";

import { EmptyState } from "@/components";
import SharedHeader from "@/components/SharedHeader";
import VideoCard from "@/components/VideoCard";
import { redirect } from "next/dist/server/api-utils";
import React from "react";

const ProfilePage = async ({ params, searchParams }: ParamsWithSearch) => {
  const { id } = await params;
  const { query, fiter } = await searchParams;

  const { user, videos } = await getAllVideosByUser(id, query, filter);
  if (!user) redirect("/404");

  return (
    <main className="wrapper page">
      <SharedHeader title="All Videos" subHeader="Public Library" />

      {videos?.length > 0 ? (
        <section className="video-grid">
          {videos.map(({ video, user }) => (
            <VideoCard
              key={video.id}
              id={video.videoId}
              title={video.title}
              thumbnail={video.thumbnailUrl}
              createdAt={video.createdAt}
              userImg={user?.image ?? ""}
              username={user?.name ?? "Guest"}
              views={video.views}
              visibility={video.visibility}
              duration={video.duration}
            />
          ))}
        </section>
      ) : (
        <EmptyState
          icon="/assets/icons/video.svg"
          title="No Videos Found"
          description="Try adjusting your search."
        />
      )}

      {pagination?.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          queryString={query}
          filterString={filter}
        />
      )}
    </main>
  );
};

export default ProfilePage;
