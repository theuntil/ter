import React from "react";

interface AISectionProps {
  badgeText?: string;
  title: string;
  description?: string;
  className?: string;
}

const AISection: React.FC<AISectionProps> = ({
  badgeText,
  title,
  description,
  className = "",
}) => {
  return (
    <section
      className={`
        flex flex-col items-center justify-center
        min-h-[300px] px-4
        bg-white text-black
        dark:bg-black dark:text-white
        ${className}
      `}
    >
      {/* Badge */}
      {badgeText && (
        <div className="mb-4">
          <span
            className="
              px-3 py-1.5 text-xs font-light tracking-wide
              text-white
              border border-white/10 bg-black/90
              rounded-lg
            "
          >
            {badgeText}
          </span>
        </div>
      )}

      {/* Title */}
      <h1
        className="
          max-w-xl text-center
          text-2xl md:text-3xl
          font-semibold tracking-tight leading-[1.1]
          mb-3
        "
      >
        {title}
      </h1>

      {/* Description */}
      {description && (
        <p
          className="
            max-w-md text-center
            text-xs md:text-sm
            text-gray-600 dark:text-gray-400
            leading-relaxed
          "
        >
          {description}
        </p>
      )}
    </section>
  );
};

export default AISection;
