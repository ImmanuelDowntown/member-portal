import { Link } from "react-router-dom";
import defaultGroups from "@/data/defaultGroups";
export default function Groups(){
  const parents = defaultGroups.filter(g => !g.parentId);
  const childrenByParent = (id:string) => defaultGroups.filter(g => g.parentId === id);
  return (<div className="container py-10">
      <h1 className="text-2xl font-semibold text-accent">Groups</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {parents.map(p => (<div key={p.slug} className="border border-border p-4">
            <h2 className="text-xl font-medium">{p.name}</h2>
            <p className="text-text2 text-sm mt-1">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {childrenByParent(p.slug).map(c => (<Link key={c.slug} to={`/groups/${c.slug}`} className="btn btn-outline btn-sm">{c.name}</Link>))}
            </div>
          </div>))}
      </div>
    </div>);}
