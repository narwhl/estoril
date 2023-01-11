import React from "react";
import prisma from "../../lib/prisma";

export default function Reader({ data }) {
  return (
    <div className="flex flex-col items-center font-serif">
      <h1 className="text-3xl max-w-lg">{ data.title }</h1>
      <dl>
        <dt>{data.author}</dt>
        <dl></dl>
      </dl>
      <article className="prose lg:prose-lg" dangerouslySetInnerHTML={{__html: data.content}} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = parseInt(context.params.id);
  const bookmark = await prisma.bookmark.findUnique({
    where: {
      id
    }
  });
  return {
    props: {
      data: JSON.parse(JSON.stringify(bookmark))
    }
  }
}