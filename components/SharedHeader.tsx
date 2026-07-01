import Link from "next/link";
import React from "react";

const SharedHeader = ({ subHeader, title, userImg }: SharedHeaderProps) => {
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
