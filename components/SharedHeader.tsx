import { updateURLParams } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SharedHeader = ({ subHeader, title, userImg }: SharedHeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") || "",
  );

  const [selectedFilter, setSelectedFilter] = useState(
    searchParams.get("filter") || "Most Recent",
  );

  useEffect(() => {
    setSearchQuery(searchParams("query") || "");
    setSelectedFilter(searchParams.get("filter") || "Most Recent");
  }, [searchParams]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchQuery !== searchParams.get("query")) {
        const url = updateURLParams(
          searchParams,
          { query: searchQuery || null },
          pathname,
        );
        router.push(url);
      }
    }, 500);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery, searchParams, pathname, router]);

  return (
    <header className="header">
      <section className="header-container">
        <div className="details">
          {userImg && (
            <Image
              src={userImg}
              alt="user"
              width={66}
              height={66}
              className="rounded-full"
            />
          )}

          <article>
            <p>{subHeader}</p>
            <h1>{title}</h1>
          </article>

          <aside>
            <Link href="/upload">
              <Image
                src="/assets/icons/upload.svg"
                alt="upload"
                width={16}
                height={16}
              />
              <span>Upload a video</span>
            </Link>
            <div className="record">
              <button className="prrimary-btn">
                <Image src={ICONS.record} alt="record" width={16} height={16} />
                <span>Record a Video</span>
              </button>
            </div>
          </aside>
        </div>
      </section>

      <section className="search-filter">
        <div className="search">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for videos, tags, folders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Image
            src="/assets/icons/search.svg"
            alt="search"
            width={16}
            height={16}
          />
        </div>
        <DropdownList
          options={filterOptions}
          selectedOption={selectedFilter}
          onOptionSelect={handleFilterChange}
          triggerElement={renderFilterTrigger()}
        />
      </section>
    </header>
  );
};

export default SharedHeader;
